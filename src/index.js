// for hot reloading only. TODO: remove after development
require('file-loader!./index.ejs')


import StyleTransferExamples from './diagrams/StyleTransferExamples.html';
import AlignedInterpolationExamples from './diagrams/AlignedInterpolationExamples.html';
import AlignedInterpolationAnimations from './diagrams/AlignedInterpolationAnimations.html';
import SemiTransparentExamples from './diagrams/SemiTransparentExamples.html';
import ThreeDStyleTransferExamples from './diagrams/3DStyleTransferExamples.html';

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

{
  const figure = document.getElementById('AlignedInterpolationAnimations');
  figure.addEventListener("ready", function() {
    const alignedInterpolationAnimations = new AlignedInterpolationAnimations({target: figure});
  });
}

{
  const figure = document.getElementById('SemiTransparentExamples');
  figure.addEventListener("ready", function() {
    const semiTransparentExamples = new SemiTransparentExamples({target: figure});
  });
}

{
  const figure = document.getElementById('3DStyleTransferExamples');
  figure.addEventListener("ready", function() {
    const styleTransferExamples = new ThreeDStyleTransferExamples({target: figure});
  });
}

