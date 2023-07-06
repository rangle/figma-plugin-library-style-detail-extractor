figma.showUI(__html__, { width: 350, height: 400 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "extract-styles") {
    const styles = [
      ...figma.getLocalGridStyles(),
      ...figma.getLocalPaintStyles(),
      ...figma.getLocalEffectStyles(),
      ...figma.getLocalTextStyles(),
    ];
    const styleIds = styles.map((s) => s.id);
    const styleNames = styles.map((s) => s.name);

    figma.ui.postMessage({
      type: "result",
      styleIds,
      styleNames,
      libName: figma.root.name,
    });
  }

  if (msg.type === "cancel") {
    figma.closePlugin();
  }
};
