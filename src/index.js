// for hot reloading only. TODO: remove after development
require('file-loader!./index.ejs')

import VisualTOC                      from './diagrams/VisualTOC.html';
import StyleTransferExamples          from './diagrams/StyleTransferExamples.html';
import AlignedUnalignedComparison     from './diagrams/AlignedUnalignedComparison.html';
import AlignedInterpolationExamples   from './diagrams/AlignedInterpolationExamples.html';
// import AlignedInterpolationAnimations from './diagrams/AlignedInterpolationAnimations.html';
// import SemiTransparentCombination     from "./diagrams/SemiTransparentCombination.html";
import SemiTransparentExamples        from './diagrams/SemiTransparentExamples.html';
import TransparentNeuronExamples      from './diagrams/TransparentNeuronExamples.html';
import NonTransparentNeuronExamples   from './diagrams/NonTransparentNeuronExamples.html';
import ThreeDStyleTransferExamples    from './diagrams/3DStyleTransferExamples.html';
import ThreeDFeatureVizExamples       from './diagrams/3DFeatureVizExamples.html';
import CPPNExamples                   from "./diagrams/CPPNExamples.html";
import CPPNAnimations                 from "./diagrams/CPPNAnimations.html";
import CPPNInterpolation              from "./diagrams/CPPNInterpolation.html";
// import BunnyModel                     from "./diagrams/BunnyModel.html";
import BunnyModelTextureSpace         from "./diagrams/BunnyModelTextureSpace.html";

import ImageRow                       from './components/ImageRow.html';
import ColabLink                      from './components/ColabLink.html';


// eagerly initialize vtoc  as it's above the fold
import { sections } from "./sections.json";
const tocNav = document.getElementById('vtoc');
const visualTOC = new VisualTOC({target: tocNav, data: {sections: sections}});

{
  for (const section of sections) {
    const className = "add-colab-link--" + section.anchor.slice(1);
    const elements = document.getElementsByClassName(className);
    for (const element of elements) {
      const data = {target: element, data: { url: section.colab_url }};
      const colabLink = new ColabLink(data);
    }
  }
}

{
  const figure = document.getElementById('StyleTransferExamples');
  figure.addEventListener("ready", function() {
    const styleTransferExamples = new StyleTransferExamples({target: figure});
  });
}

{
  const figure = document.getElementById('TransparentNeuronExamples');
  figure.addEventListener("ready", function() {
    const transparentNeuronExamples = new TransparentNeuronExamples({target: figure});
  });
}

// {
//   const figure = document.getElementById('NonTransparentNeuronExamples');
//   figure.addEventListener("ready", function() {
//     const nonTransparentNeuronExamples = new NonTransparentNeuronExamples({target: figure, data: {
//       url: 'images/neurons.jpg', width: 176, columns: 5
//     }});
//   });
// }

{
  const figure = document.getElementById('AlignedInterpolationExamples');
  figure.addEventListener("ready", function() {
    const alignedInterpolationExamples = new AlignedInterpolationExamples({target: figure});
  });
}

{
  const figure = document.getElementById('UnalignedInterpolation');
  const unalignedInterpolation = new ImageRow({target: figure, data: {
    url: 'images/same.jpg', width: 128, columns: 5, perRow: 5
  }});
}

{
  const figure = document.getElementById('AlignedInterpolation');
  const unalignedInterpolation = new ImageRow({target: figure, data: {
    url: 'images/interpolation-animation-aligned.jpg', width: 128, columns: 15, perRow: 5, every: 3
  }});
}

{
  const figure = document.getElementById('AlignedUnalignedComparison');
  figure.addEventListener("ready", function() {
    const unalignedInterpolation = new AlignedUnalignedComparison({target: figure});
    figure.addEventListener("onscreen", () => unalignedInterpolation.onscreen());
  });
}

// {
//   const figure = document.getElementById('AlignedInterpolationAnimations');
//   figure.addEventListener("ready", function() {
//     const alignedInterpolationAnimations = new AlignedInterpolationAnimations({target: figure});
//   });
// }

// {
//   const figure = document.getElementById("SemiTransparentCombination")
//   figure.addEventListener("ready", function() {
//     new SemiTransparentCombination({target: figure});
//   });
// }

{
  const figure = document.getElementById('SemiTransparentExamples');
  figure.addEventListener("ready", function() {
    const semiTransparentExamples = new SemiTransparentExamples({target: figure});
  });
}

//Add event listener
// new CPPNExamples({target: document.getElementById("CPPN-Examples")});

{
  const figure = document.getElementById("CPPN-Examples");
  figure.addEventListener("ready", function() {
    const cppnAnimations = new CPPNExamples({target: figure});
  });
}

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

// {
//   const figure = document.getElementById('BunnyModel');
//   figure.addEventListener("ready", function() {
//     const bunnyModel = new BunnyModel({target: figure});
//   });
// }

{
  const figure = document.getElementById('BunnyModelTextureSpaceOptimization');
  figure.addEventListener("ready", function() {
    const bunnyModel = new BunnyModelTextureSpace({target: figure});
  });
}

{
  const figure = document.getElementById('3DStyleTransferExamples');
  figure.addEventListener("ready", function() {
    const styleTransferExamples = new ThreeDStyleTransferExamples({target: figure});
    const settings = [{id: '3DStyleTransferExamples-VanGogh', data: {contentIndex: 0, styleIndex: 5}}, 
                      {id:'3DStyleTransferExamples-Kandinsky', data: {contentIndex: 0, styleIndex: 0}}]
    for (const {id, data} of settings) {
      const aTag = document.getElementById(id);
      const options = {block: "start", behavior: "smooth"};
      aTag.onclick = () => {
        figure.scrollIntoView(options);
        styleTransferExamples.set(data);
      }
    }
  });
}

{
  const figure = document.getElementById('3DFeatureVizExamples');
  figure.addEventListener("ready", function() {
    const styleTransferExamples = new ThreeDFeatureVizExamples({target: figure});
  });
}

{
  function determineTextZoomLevel() {
    const p = document.getElementById('first-paragraph');
    if (p) {
      const brWidth = p.getBoundingClientRect().width;
      const zoomlevel = brWidth / 704; // magic: default text body width
      document.body.style = "--textzoomlevel: " + zoomlevel;
      
      const tags = document.getElementsByClassName("distill-experimental-autoresize");
      for (const tag of tags) {
        // magic, supposed to be figure tag within d-figure
        if (tag.children.length == 1) {
          const innerFigure = tag.children[0];
          const height = parseInt(innerFigure.style.height);
          const padding = 40;
          tag.style.height = (height + padding) * zoomlevel + "px";
        }
        
      }
    }
  }
  
  window.onresize = determineTextZoomLevel;
  determineTextZoomLevel();
}

