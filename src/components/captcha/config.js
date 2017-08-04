/*
 * @Author: qiuziz
 * @Date: 2017-08-04 10:38:42
 * @Last Modified by: qiuziz
 * @Last Modified time: 2017-08-04 16:24:33
 */

const OPTIONS = {
        fontSizeMin: 22,  // 字体尺寸最小值
        fontSizeMax: 26,  // 字体尺寸最大值
        colors: [         // 字可能的颜色
          '#117cb3',
          '#f47b06',
          '#202890',
          '#db1821',
          '#b812c2',
        ],
        fonts: [          // 可能的字体
          'Times New Roman',
          'Georgia',
          'Serif',
          'sans-serif',
          'arial',
          'tahoma',
          'Hiragino Sans GB',
        ],
        lines: 18,         // 生成多少根线
        lineColors: [     // 线可能的颜色
          '#7199e1',
          '#383838',
          '#ec856d',
          '#008888',
          '#cccee2',
          '#8e6710',
          '#130d01',
          '#000002'
        ],
        lineHeightMin: 1, // 线的粗细最小值
        lineHeightMax: 1, // 线的粗细最大值
        lineWidthMin: 20, // 线的长度最小值
        lineWidthMax: 60, // 线的长度最大值
}
    
const CODES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
              'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
              '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


export { OPTIONS , CODES }