// for hot reloading only. TODO: remove after development
require('file-loader!./index.ejs')


// Add instantiation for figures here
import StyleTransferExamples from './StyleTransferExamples.html';

const tag = document.getElementById('StyleTransferExamples');
const styleTransferExamples = new StyleTransferExamples({target: tag});
