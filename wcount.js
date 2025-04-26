function countWords() {
    let text = document.getElementById("textInput").value.trim();
    let words = text.length > 0 ? text.split(/\s+/).filter(word => word.length > 0).length : 0;
    document.getElementById("wordCount").textContent = words;
    console.log("Word Count:", words); // Debugging output
}