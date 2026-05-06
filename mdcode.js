// mdcode.js
async function renderMarkdown() {
  const contentDiv = document.getElementById('content');
  
  try {
    // 1. Fetch the README.md file from the same directory
    const response = await fetch('./README.md');
    
    if (!response.ok) {
      throw new Error(`Failed to load README.md (Status: ${response.status})`);
    }

    const markdownText = await response.text();

    // 2. Use the 'marked' library (loaded in index.html) to parse the text
    // The 'marked' variable is globally available once the CDN script loads
    contentDiv.innerHTML = marked.parse(markdownText);
    
  } catch (error) {
    contentDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    console.error("Markdown rendering error:", error);
  }
}

// Run the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderMarkdown);
