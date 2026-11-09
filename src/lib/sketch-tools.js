export function createSketchTools(container, { getInstance, restart, regenerate }) {
  container.innerHTML = '<button type="button" data-action="restart">Restart</button><button type="button" data-action="regenerate">Regenerate</button><button type="button" data-action="save">Save PNG</button>';
  container.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (action === 'restart') restart();
    if (action === 'regenerate') regenerate();
    if (action === 'save') getInstance()?.saveCanvas?.();
  });
}
