/* Keyboard shortcuts to be used in hooks */

export const registerCtrlCmdEnter = (callback: () => any) => {
  const keyPressEvent = (e: KeyboardEvent) => {
    const modifier = e.metaKey || e.ctrlKey
    if (modifier && e.code === 'Enter') {
      callback()
    }
  }

  document.addEventListener('keydown', keyPressEvent)

  return () => {
    document.removeEventListener('keydown', keyPressEvent)
  }
}
