import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

// Helper to get all files in a directory recursively
function getFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir)
    files.forEach(file => {
        const filePath = path.join(dir, file)
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
                getFiles(filePath, fileList)
            }
        } else {
            if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.html')) {
                fileList.push(filePath)
            }
        }
    })
    return fileList
}

const codebaseRoot = path.resolve(__dirname, '../../')
const sourceFiles = getFiles(codebaseRoot)

describe('Security Audit Tests', () => {

    it('should ensure all target="_blank" links have rel="noopener noreferrer"', () => {
        sourceFiles.forEach(file => {
            const content = fs.readFileSync(file, 'utf8')
            // Look for target="_blank" that DOES NOT have rel="noopener noreferrer"
            // This is a simplified regex; in a real audit quest, a more robust parser might be used.
            const unsafeLinkRegex = /<a\s+[^>]*target=["']_blank["'](?![^>]*rel=["']noopener noreferrer["'])[^>]*>/gi

            const matches = content.match(unsafeLinkRegex)
            if (matches) {
                throw new Error(`Unsafe external links found in ${file}:\n${matches.join('\n')}\nSecurity risk: Tab-nabbing.`)
            }
        })
    })

    it('should prevent use of dangerouslySetInnerHTML', () => {
        sourceFiles.forEach(file => {
            // Skip this test file itself
            if (file.includes('security.test.jsx')) return

            const content = fs.readFileSync(file, 'utf8')
            if (content.includes('dangerouslySetInnerHTML')) {
                throw new Error(`Potential XSS risk in ${file}: Use of dangerouslySetInnerHTML found.`)
            }
        })
    })

    it('should enforce HTTPS for external domain links', () => {
        sourceFiles.forEach(file => {
            const content = fs.readFileSync(file, 'utf8')
            // Match http:// links that are NOT localhost/127.0.0.1
            // Exclude strings that look like XML namespaces or schemas if any
            const insecureLinkRegex = /"http:\/\/(?!localhost|127\.0\.0\.1)[^"]+"/gi

            const matches = content.match(insecureLinkRegex)
            if (matches) {
                // Filter out common false positives like schema.org in JSON-LD if needed
                const realMatches = matches.filter(m => !m.includes('schema.org'))
                if (realMatches.length > 0) {
                    throw new Error(`Insecure HTTP links found in ${file}:\n${realMatches.join('\n')}\nSecurity risk: Man-in-the-middle.`)
                }
            }
        })
    })
})
