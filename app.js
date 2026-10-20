// 女方宾客桌位表（Section A：4、11、17、20；Section B：22-40；41 为 RSV）
const brideTables = {
  "4": [
    ["劉國寧夫婦", 2],
    ["陳偉雄夫婦", 2],
    ["黃天才夫婦", 2],
    ["沈偉雄夫婦", 2],
    ["邱玉麟夫婦", 2]
  ],
  "11": [
    ["梁仕文夫婦", 2],
    ["黃小糧夫婦", 2],
    ["鄧家文夫婦", 2],
    ["陳桂銘夫婦", 2],
    ["黃玉雄夫婦", 2]
  ],
  "17": [
    ["馮文興夫婦", 2],
    ["盧書凡夫婦", 2],
    ["沈音龍夫婦", 2],
    ["沈得銘夫婦", 2],
    ["張君鴻夫婦", 2]
  ],
  "20": [
    ["Dato Pang", 2],
    ["楊俊華闔家", 3],
    ["Chemy Bin Mangala @ MArthen", 1],
    ["Afendey Bin Boy", 1],
    ["Mohd Fareez Bin Mihd Said", 1],
    ["Reynold Japli@Jeff", 1],
    ["Muhammad Isham Bin Beta", 1]
  ],
  "22": [
    ["梁慧娟", 2],
    ["大伯娘", 1],
    ["梁蕙音", 3],
    ["梁慧貞", 2],
    ["梁健雄合家", 2]
  ],
  "23": [
    ["劉曉彬", 9, "（1 baby）"]
  ],
  "24": [
    ["Cecelia", 3],
    ["張蓮娣", 1],
    ["張蓮貞", 2],
    ["tatabi", 1],
    ["Boy", 1],
    ["Pau & toong", 2]
  ],
  "25": [
    ["Beh Chong Sin", 1],
    ["sean yap", 1],
    ["沈義雄 & 鄭宇 & his mama & sis", 3, "（1 baby）"],
    ["林俊勇", 1],
    ["曹立信", 3]
  ],
  "26": [
    ["劉倫安夫婦", 2],
    ["劉倫發先生", 1],
    ["劉倫新先生", 1],
    ["鍾利明夫婦", 2],
    ["梁健榮", 2, "（1 baby）"],
    ["方思悌夫婦", 2]
  ],
  "27": [
    ["Alice 姨婆", 2],
    ["張蓮鳳", 1],
    ["何文聲", 2],
    ["張玉堂", 2],
    ["劉漢強", 1],
    ["田漢松", 2]
  ],
  "28": [
    ["彭志偉夫婦", 2],
    ["彭志新夫婦", 2],
    ["張健傑夫婦", 2],
    ["彭秀靈夫婦", 4]
  ],
  "29": [
    ["彭秀文夫婦", 2],
    ["彭梓誠", 4],
    ["唐瑞忠夫婦", 2],
    ["唐玉虎夫婦", 2]
  ],
  "30": [
    ["Soo Song Kai & GF", 2],
    ["Matthew Liew", 1],
    ["Stanley", 1],
    ["Chong Soo Fah & husband", 2],
    ["Vashti Kong", 1],
    ["Chok Kar Ling", 1],
    ["Wey & Dickson", 2]
  ],
  "31": [
    ["李慶仁合家", 3],
    ["張文威夫婦", 2],
    ["李燕珍女士", 1],
    ["梁有福夫婦", 2],
    ["李志輝夫婦", 2]
  ],
  "32": [
    ["蘇福成", 2],
    ["彭秋維合家", 3],
    ["王盛標合家", 2],
    ["Carson", 2],
    ["張偉梅女士", 1]
  ],
  "33": [
    ["鍾貴華合家", 3],
    ["沈貴平", 2],
    ["楊善翊", 2],
    ["沈貴雲（鄭宇婆婆）", 1],
    ["罗国雄", 1]，
    ["彭偉賢先生", 1]
  ],
  "34": [
    ["陳玉棠", 1],
    ["陳玉輝", 2],
    ["張美麗", 1],
    ["陳雪莉", 1],
    ["張瑄統爸媽", 2],
    ["姨姨姨丈", 2]
  ],
  "35": [
    ["鍾春和合家", 3],
    ["吳煥好", 2],
    ["易玉娟", 1],
    ["王運娥", 1],
    ["陳傳權", 2],
    ["Mrs Chin", 1]
  ],
  "36": [
    ["林茂秀", 3],
    ["林國良", 3],
    ["譚春成", 4]
  ],
  "37": [
    ["邱昱荌合家", 3],
    ["何輔華", 3],
    ["鄧惠貞女士", 1],
    ["佘寶珠女士", 1],
    ["劉運芬女士", 1],
    ["鍾梅妹女士", 1]
  ],
  "38": [
    ["呂連志", 2],
    ["呂偉傑", 2],
    ["呂慧盈", 1],
    ["陳嘉怡", 1],
    ["吴江夫妇", 2],
    ["黃希文", 1],
    ["陸育生", 1]
  ],
  "39": [
    ["俞希明夫婦", 2],
    ["江平安夫婦", 2],
    ["歐錦祥", 2],
    ["戴偉雄夫婦", 2],
    ["唐玉彬夫婦", 2]
  ],
  "40": [
    ["鐘雅輝", 4],
    ["俊浩", 1],
    ["曹立德", 1],
    ["陳木合", 1],
    ["彭玉祥", 2]，
    ["陳玉蓮", 1]，    
  ],
};

// 男方宾客桌位表（1-21 桌）
const groomTables = {
  "1": [["隆聖宫", 10]],
  "2": [["隆聖宫", 10]],
  "3": [
    ["林求英合家", 5],
    ["Yap Chiew Min 夫妇", 2],
    ["Anna", 1],
    ["黃曉嫻爸媽", 2]
  ],
  "6": [
    ["Chin Chiang Vui 夫妇", 2],
    ["Alex Voo 合家", 5],
    ["Lim Vun Ket", 1],
    ["Lawrence", 1],
    ["Ah 君", 1]
  ],
  "7": [
    ["白馬 (Yang Yi Ting)", 1],
    ["黄荣川", 2],
    ["MU (Lim Chau Ching)", 2],
    ["Alan Koh", 1],
    ["Jason Wong", 1],
    ["Vui Liong", 1]
  ],
  "8": [
    ["袁其富夫妇", 2],
    ["Uncle Chan", 2],
    ["江惠平夫妇", 2],
    ["Pang Nyuk Pin & Lim Nyuk Pin", 3]
  ],
  "9": [
    ["Mr Yap 葉政言夫妇", 2],
    ["谭文俊", 1],
    ["Eric Chong", 1],
    ["Jack Eng", 1],
    ["司徒荣喜夫妇", 2],
    ["徐子健夫妇", 2]
  ],
  "10": [["Economic Pasar", 9]],
  "12": [
    ["李祥夫婦", 2],
    ["陳建華夫婦", 2],
    ["謝福光先生", 1],
    ["Felix Lee 夫婦", 2],
    ["黃樂安夫婦", 2]
  ],
  "13": [
    ["李錦良", 1],
    ["劉錦良", 1],
    ["Jessica Soon", 1],
    ["Liew Lu Min", 1],
    ["佘文聰夫妇", 2],
    ["丘重武", 1],
    ["朱順蓮", 1],
    ["李玉芬", 1],
    ["劉小芳", 1]
  ],
  "14": [
    ["Kenneth Lai", 3],
    ["Rose Lai", 2],
    ["Cat 夫妇", 2],
    ["B 哥", 2]
  ],
  "15": [
    ["Anson", 2],
    ["Henry", 2],
    ["CYM", 2],
    ["許桂瑄", 1],
    ["李艷均", 1],
    ["Ellysia lok", 2]
  ],
  "16": [
    ["李承宇", 1],
    ["彭嘉欣&谢佳达", 2],
    ["韩俊贤&关圣美", 2],
    ["彭耀松夫妇", 2],
    ["黄琬淣", 1],
    ["周纹俊", 1]
  ],
  "18": [
    ["罗少华合家", 3],
    ["叶祖瑝夫妇", 2],
    ["关新源&女朋友", 2],
    ["邓雯岚", 1],
    ["钟富德 & 女朋友", 2]
  ],
  "19": [
    ["傅美玲&弟弟", 3],
    ["楊忠亮合家", 3],
    ["Chang Ling Fuk & Chang Wei Xiong", 2]
  ],
  "21": [
    ["Zarul", 3],
    ["Goh", 1],
    ["Simon", 1],
    ["Samuel", 1],
    ["Chua", 1],
    ["KW & CX", 2],
    ["Yen Zai", 1]
  ]
};

// 预留桌标记（RSV）
const rsvTables = new Set([5, 36, 41]);

// 简繁互通映射字典
const simplifiedToTraditional = {
  刘:'劉', 伦:'倫', 发:'發', 钟:'鍾', 锺:'鍾', 鐘:'鍾', 伟:'偉', 贤:'賢',
  荣:'榮', 国:'國', 宁:'寧', 陈:'陳', 黄:'黃', 邓:'鄧', 粮:'糧', 铭:'銘',
  冯:'馮', 兴:'興', 卢:'盧', 书:'書', 龙:'龍', 张:'張', 鸿:'鴻', 贵:'貴',
  凤:'鳳', 莲:'蓮', 云:'雲', 郑:'鄭', 妈:'媽', 妇:'婦', 亲:'親', 丽:'麗',
  辉:'輝', 运:'運', 远:'遠', 贝:'貝', 晓:'曉', 艳:'艷', 许:'許', 庆:'慶',
  谭:'譚', 连:'連', 吕:'呂', 杰:'傑', 燕:'燕', 灵:'靈', 强:'強', 华:'華',
  孙:'孫', 叶:'葉', 杨:'楊', 坚:'堅', 涛:'濤', 斌:'斌', 汉:'漢', 宝:'寶',
  关:'關', 业:'業', 仪:'儀', 俞:'俞', 陆:'陸', 覃:'覃', 谢:'謝', 罗:'羅',
  韩:'韓', 纹:'紋', 圣:'聖', 宫:'宮', 顺:'順', 达:'達', 富:'富', 标:'標',
  权:'權', 统:'統', 维:'維', 声:'聲', 聪:'聰', 义:'義', 耀:'耀', 锦:'錦',
  诚:'誠', 辅:'輔', 传:'傳', 乐:'樂', 岚:'嵐', 苏:'蘇', 马:'馬', 庄:'莊',
  宾:'賓', 胜:'勝', 阔:'闊', 阖:'闔', 闺:'閨', 宽:'寬', 爱:'愛', 双:'雙',
  欢:'歡', 迎:'迎', 钱:'錢', 银:'銀', 铁:'鐵', 锡:'錫', 镇:'鎮', 锐:'銳',
  贞:'貞', 娴:'嫻', 欧:'歐', 礼:'禮', 禄:'祿', 寿:'壽', 喜:'喜'
};

function normalizeSearch(value) {
  return String(value)
    .toLowerCase()
    .split('')
    .map(char => simplifiedToTraditional[char] || char)
    .join('');
}

// 对应最新 41 桌平面图 [left%, top%] 百分比精确定位
const positions = {
  // --- Section A (左侧 4 列，共 21 桌) ---
  1:  [10.5, 28.5],
  2:  [10.3, 38.8],
  3:  [10.0, 49.6],
  4:  [9.8,  60.5],
  5:  [9.6,  72.5],

  6:  [18.8, 25.8],
  7:  [18.7, 36.0],
  8:  [18.6, 46.8],
  9:  [18.4, 57.6],
  10: [18.5, 68.3],
  11: [18.6, 79.5],

  12: [27.2, 28.5],
  13: [27.2, 39.0],
  14: [27.2, 50.0],
  15: [27.2, 61.0],
  16: [27.3, 71.8],
  17: [27.3, 82.6],

  18: [36.5, 33.8],
  19: [36.5, 44.5],
  20: [36.5, 55.6],
  21: [36.5, 66.5],

  // --- Section B (右侧 4 列，共 20 桌) ---
  22: [63.2, 35.0],
  23: [63.2, 46.0],
  24: [63.3, 56.8],
  25: [63.3, 67.8],

  26: [70.8, 28.5],
  27: [70.9, 39.2],
  28: [71.4, 50.0],
  29: [72.0, 61.0],
  30: [72.6, 71.8],

  31: [79.2, 26.5],
  32: [79.8, 37.2],
  33: [80.5, 48.0],
  34: [81.3, 58.8],
  35: [81.8, 69.5],
  36: [82.2, 80.2],

  37: [87.6, 28.2],
  38: [88.6, 38.8],
  39: [89.3, 49.5],
  40: [90.0, 60.5],
  41: [90.6, 71.5]
};

const pins = document.querySelector('#tablePins');
const floor = document.querySelector('#floorPlan');
const panel = document.querySelector('#selectedPanel');
const selectedContent = document.querySelector('#selectedContent');
const input = document.querySelector('#searchInput');
const clear = document.querySelector('#clearSearch');
let selected = null;

// 生成所有 41 张餐桌的 Pin 按钮
Object.entries(positions).forEach(([number, [x, y]]) => {
  const b = document.createElement('button');
  b.className = 'table-pin' + (rsvTables.has(+number) ? ' rsv-pin' : '');
  b.dataset.table = number;
  b.style.left = x + '%';
  b.style.top = y + '%';
  b.setAttribute('aria-label', `选择 ${number} 号桌${rsvTables.has(+number) ? ' (预留)' : ''}`);
  b.addEventListener('click', e => {
    e.stopPropagation();
    selectTable(+number);
  });
  pins.append(b);
});

function records(side) {
  return Object.entries(side).map(([table, guests]) => ({
    table: +table,
    guests,
    side
  }));
}

function total(guests) {
  return guests.reduce((n, g) => n + (+g[1] || 0), 0);
}

function card(record) {
  const el = document.createElement('article');
  el.className = 'guest-card' + (selected === record.table ? ' selected' : '');
  el.tabIndex = 0;
  const isRsv = rsvTables.has(record.table);
  const seatNum = total(record.guests);

  el.innerHTML = `
    <div class="card-title">
      <span>${record.table} 号桌</span>
      <span class="seat-total">${seatNum > 0 ? `${seatNum} 位` : (isRsv ? '预留桌 (RSV)' : '预留/无宾客')}</span>
    </div>
    ${
      record.guests.length
        ? `<ul class="guest-list">${record.guests.map(g => `<li>${g[0]} <em>${g[1]}位${g[2] || ''}</em></li>`).join('')}</ul>`
        : `<p class="guest-list" style="color:#9c858b;font-style:italic;">${isRsv ? '此桌为预留座位 (RSV)' : '未分配宾客'}</p>`
    }
  `;
  el.addEventListener('click', e => {
    e.stopPropagation();
    selectTable(record.table);
  });
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectTable(record.table);
    }
  });
  return el;
}

// 支持简体、繁体与原始拼串双向匹配
function matches(record, rawQ) {
  if (!rawQ) return true;
  const rawHay = [String(record.table), ...record.guests.flat()].join(' ').toLowerCase();
  const normHay = normalizeSearch(rawHay);
  const normQ = normalizeSearch(rawQ);
  const cleanRawQ = rawQ.toLowerCase();

  return rawHay.includes(cleanRawQ) || normHay.includes(normQ) || normHay.includes(cleanRawQ);
}

function render() {
  const rawQ = input.value.trim();
  clear.hidden = !rawQ;
  const groups = [
    [brideTables, document.querySelector('#brideGrid'), '女方'],
    [groomTables, document.querySelector('#groomGrid'), '男方']
  ];
  let count = 0;
  groups.forEach(([data, node, label]) => {
    node.textContent = '';
    const found = records(data).filter(r => matches(r, rawQ));
    count += found.length;
    if (found.length) {
      found.forEach(r => node.append(card(r)));
    } else {
      node.innerHTML = `<p class="empty">没有找到${label}宾客资料</p>`;
    }
  });
  document.querySelectorAll('.table-pin').forEach(pin => {
    pin.classList.toggle('selected', +pin.dataset.table === selected);
  });
  document.querySelector('#resultNote').textContent = rawQ
    ? `找到 ${count} 桌符合「${rawQ}」的资料`
    : '显示全部宾客座位';
}

function selectTable(n) {
  selected = n;
  const rows = [
    ['女方', brideTables[n]],
    ['男方', groomTables[n]]
  ].filter(([, g]) => g && g.length > 0);

  const isRsv = rsvTables.has(n);

  selectedContent.innerHTML = `
    <h2 class="selected-title">${n} 号桌来宾 ${isRsv ? '<span style="font-size:0.8rem;color:#df273c;font-weight:normal;">[预留桌 RSV]</span>' : ''}</h2>
    ${
      rows.length
        ? rows.map(([name, guests]) => `
            <div class="selected-group ${name === '女方' ? 'bride' : 'groom'}">
              <b>${name}宾客 · ${total(guests)} 位</b>
              <ul class="selected-list">
                ${guests.map(g => `<li>${g[0]}（${g[1]}位${g[2] || ''}）</li>`).join('')}
              </ul>
            </div>
          `).join('')
        : `<p style="margin-top:14px;color:#786e71;">${isRsv ? '此桌为预留座位（RSV）。' : '这桌为预留或暂未列入宾客资料。'}</p>`
    }
  `;
  panel.hidden = false;
  render();
  document.querySelector(`[data-table="${n}"]`)?.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'nearest'
  });
}

function clearSelection() {
  if (selected === null) return;
  selected = null;
  panel.hidden = true;
  render();
}

input.addEventListener('input', render);
clear.addEventListener('click', () => {
  input.value = '';
  input.focus();
  render();
});
document.querySelector('.close-panel').addEventListener('click', clearSelection);
floor.addEventListener('click', e => {
  if (e.target === floor || e.target.tagName === 'IMG') clearSelection();
});
document.addEventListener('click', e => {
  if (selected !== null && !e.target.closest('.guest-card, .table-pin, .selected-panel')) {
    clearSelection();
  }
});

render();
