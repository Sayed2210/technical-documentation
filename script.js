
  console.log(Array.from(document.querySelectorAll('.code')))
  
  
  let text = Array.from(document.querySelectorAll('.code'))
  
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
