
    let selectedElement = null;

    function selectItem(element) {
      if (selectedElement) {
        selectedElement.classList.remove('selected');
      }

      element.classList.add('selected');
      selectedElement = element;
    }