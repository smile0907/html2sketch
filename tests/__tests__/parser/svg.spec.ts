import { parseToSvg } from 'html2sketch';
import { isUpdate, outputJSONData, svgJSON } from '@test-utils';

describe('parseToSvg', () => {
  afterAll(() => {
    document.body.innerHTML = '';
  });
  beforeAll(() => {
    document.body.innerHTML = `<svg id="svg" viewBox="64 64 736.652344 814.2161138351329" focusable="false" class="" data-icon="up-circle" width="300px" height="300px" fill="#aaa" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M73.2226562,282.36788 C517.988281,268.985067 740.371094,312.330119 740.371094,412.403036 C740.371094,562.512411 706.574547,689.414193 665.761719,731.926473 C585.929687,815.082723 381.128906,824.973348 240.128906,815.082723 C193.160156,721.491578 114.450521,640.427775 4,571.891317 L73.2226562,282.36788 Z M288.371094,399.757812 L569.023438,399.757812 L569.023438,629.085937 L288.371094,629.085937 L288.371094,399.757812 Z M460,4 L640.652344,4 C695.880819,4 740.652344,48.771525 740.652344,104 L740.652344,233.328125 L460,233.328125 L460,4 Z M68,4 L248.652344,4 C303.880819,4 348.652344,48.771525 348.652344,104 L348.652344,233.328125 L68,233.328125"></path></svg>`;
  });
  it('SVG 图形正常解析', async () => {
    const node = document.getElementById('svg');

    const svg = await parseToSvg((node as unknown) as SVGElement);
    expect(svg).toBeTruthy();
    expect(svg.toSketchJSON()).toMatchSnapshot();
    if (isUpdate) {
      // 如果出现小数点的不一致 进行重新输出
      outputJSONData(svg.toSketchJSON(), 'svg');
    }

    expect(svg.toSketchJSON()).toStrictEqual(svgJSON);
  });
});
