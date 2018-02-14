// for hot reloading only. TODO: remove after development
require('file-loader!./index.ejs')


import StyleTransferExamples from './StyleTransferExamples.html';
import AlignedInterpolationExamples from './AlignedInterpolationExamples.html';

{
  const figure = document.getElementById('StyleTransferExamples');
  figure.addEventListener("ready", function() {
    const styleTransferExamples = new StyleTransferExamples({target: figure});
  });
}

{
  const figure = document.getElementById('AlignedInterpolationExamples');
  figure.addEventListener("ready", function() {
    const alignedInterpolationExamples = new AlignedInterpolationExamples({target: figure});
  });
}
