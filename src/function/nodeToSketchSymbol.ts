import { SymbolMaster } from '../model';
import { GroupLayoutType } from '../helpers/layout';
import nodeToGroup from './nodeToGroup';

interface NodeToSketchSymbolOptions {
  symbolLayout?: GroupLayoutType;
  /**
   * 如果需要对 symbol 进行调整处理
   * 传入这个方法
   */
  handleSymbol?: (symbol: SymbolMaster) => void;
}

/**
 * 解析为 Symbol
 */

export default (
  node: Element,
  { symbolLayout, handleSymbol }: NodeToSketchSymbolOptions,
) => {
  const group = nodeToGroup(node);

  const symbol = new SymbolMaster({
    x: group.x,
    y: group.y,
    width: group.width,
    height: group.height,
  });

  symbol.style = group.style;

  group.layers.forEach((layer) => {
    switch (layer.class) {
      case 'text':
        // 对所有的文本都添加
        symbol.addOverride(layer.id, 'text');
        break;
      default:
        break;
    }
    symbol.layers.push(layer);
  });

  if (symbolLayout) {
    symbol.setGroupLayout(symbolLayout);
  }

  if (handleSymbol) {
    handleSymbol(symbol);
  }
  return symbol;
};
