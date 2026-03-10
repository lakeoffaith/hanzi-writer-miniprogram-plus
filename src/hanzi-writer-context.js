class HanziWriterContext {
  constructor({
    id,
    page,
    charDataLoader,
    character,
    onLoadCharDataError,
    onLoadCharDataSuccess,
    showOutline,
    showCharacter,

    // positioning options

    padding,

    // animation options

    strokeAnimationSpeed,
    strokeFadeDuration,
    strokeHighlightDuration,
    strokeHighlightSpeed,
    delayBetweenStrokes,
    delayBetweenLoops,

    // colors

    strokeColor,
    radicalColor,
    highlightColor,
    outlineColor,
    drawingColor,

    // quiz options

    leniency,
    showHintAfterMisses,
    highlightOnComplete,
    highlightCompleteColor,
  }) {
    console.log('HanziWriterContext options:');
  }

}

module.exports = HanziWriterContext;
