// for hot reloading only. TODO: remove after development
require('file-loader!./index.ejs')


import StyleTransferExamples          from './diagrams/StyleTransferExamples.html';
import AlignedInterpolationExamples   from './diagrams/AlignedInterpolationExamples.html';
import AlignedInterpolationAnimations from './diagrams/AlignedInterpolationAnimations.html';
import SemiTransparentCombination     from "./diagrams/SemiTransparentCombination.html";
import SemiTransparentExamples        from './diagrams/SemiTransparentExamples.html';
import ThreeDStyleTransferExamples    from './diagrams/3DStyleTransferExamples.html';
import CPPNExamples                   from "./diagrams/CPPNExamples.html";
import CPPNAnimations                 from "./diagrams/CPPNAnimations.html";
import CPPNInterpolation              from "./diagrams/CPPNInterpolation.html";
import BunnyFeatureExamples           from "./diagrams/BunnyFeatureExamples.html";




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
  const figure = document.getElementById("SemiTransparentCombination")
  figure.addEventListener("ready", function() {
    new SemiTransparentCombination({target: figure});
  });
}

{
  const figure = document.getElementById('SemiTransparentExamples');
  figure.addEventListener("ready", function() {
    const semiTransparentExamples = new SemiTransparentExamples({target: figure});
  });
}

//Add event listener
new CPPNExamples({target: document.getElementById("CPPN-Examples")});

{
  const figure = document.getElementById('CPPNAnimations');
  figure.addEventListener("ready", function() {
    const cppnAnimations = new CPPNAnimations({target: figure});
  });
}

{
  const figure = document.getElementById('CPPNInterpolations');
  figure.addEventListener("ready", function() {
    const cppnInterpolations = new CPPNInterpolation({target: figure});
  });
}

//Add event listener
new BunnyFeatureExamples({target: document.getElementById("BunnyFeatureExamples")});


{
  const figure = document.getElementById('RegularBunny');
  figure.addEventListener("ready", function() {
    const styleTransferExamples = new ThreeDStyleTransferExamples({target: figure});
  });
}

{
  const figure = document.getElementById('3DStyleTransferExamples');
  figure.addEventListener("ready", function() {
    const styleTransferExamples = new ThreeDStyleTransferExamples({target: figure});
  });
}


