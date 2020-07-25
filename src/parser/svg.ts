import SVG from '../model/Layer/Svg';
import { SVGPathData } from 'svg-pathdata';

/**
 * 将 SVG node 节点转为 SVG Sketch对象
 * @param {SVGElement} node svg节点
 */
const parserToSvg = (node: SVGElement) => {
  // sketch ignores padding and centering as defined by viewBox and preserveAspectRatio when
  // importing Svg, so instead of using BCR of the Svg, we are using BCR of its children
  const childrenBCR = SVG.getChildNodesFrame(Array.from(node.children));

  Array.from(node.children).forEach((child) => {
    if (child.nodeName === 'path') {
      const path = child.getAttribute('d');
      if (path) {
        const newPath = new SVGPathData(path).toAbs().encode();
        child.setAttribute('d', newPath);
      }
    }
  });

  const svgString = SVG.getSVGString(node);
  console.log(svgString);
  const svg = new SVG({
    x: childrenBCR.left,
    y: childrenBCR.top,
    width: childrenBCR.width,
    height: childrenBCR.height,
    svgString,
  });

  svg.name = node.getAttribute('data-icon') || 'svg';
  return svg;
};
export default parserToSvg;
