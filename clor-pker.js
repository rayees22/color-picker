 const colorPicker = document.getElementById("colorPicker");
    const fontSize = document.getElementById("fontSize");
    const fontSizeValue = document.getElementById("fontSizeValue");
    const editableText = document.getElementById("editableText");

    colorPicker.addEventListener("input", () => {
      editableText.style.color = colorPicker.value;
    });

    fontSize.addEventListener("input", () => {
      const size = fontSize.value + "px";
      editableText.style.fontSize = size;
      fontSizeValue.textContent = size;
    });