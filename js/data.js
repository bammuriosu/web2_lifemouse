/*
SPH,0
SCH,1
SFH,2
SPN,3
SCN,4
SFN,5
MPH,6
MCH,7
MFH,8
MPN,9
MCN,10
MFN,11
LPH,12
LCH,13
LFH,14
LPN,15
LCN,16
LFN,17
*/

const qnaList = [
  {
    q: '1. 손바닥 끝부터 중지 끝까지 잰 손 크기를 선택해 주세요!',
    a: [
      { answer: '작은손 (14~17.5cm)', type: [0,1,2,3,4,5] },
      { answer: '중간손 (17.5~18.5cm)', type: [6,7,8,9,19,11] },
      { answer: '큰손 (18.5~25cm)', type: [12,13,14,15,16,17] },
    ]
  },
  {
    q: '2. 손에 마우스가 닿는 부분을 선택해주세요! ',
    a: [
      { answer: 'a. 마우스위에 손바닥을 모두 올려놓는다.', type: [0,3,6,9,12,15] },
      { answer: 'b. 마우스에 손바닥을 살짝 붙인다', type: [1,4,7,10,13,16] },
      { answer: 'c. 마우스에 손가락만 닿는다', type: [2,5,8,11,14,17] },
    ]
  },
  {
    q: '3. 손목건강을 위해 무거운 마우스를 목록에서 제외할까요?',
    a: [
      { answer: '네 (90g이 넘는 마우스는 제외합니다)', type: [0,1,2,6,7,8,12,13,14] },
      { answer: '아니오', type: [3,4,5,9,10,11,15,16,17] }
    ]
  }
]

const infoList = [
  {
    name: '0',
    desc: '0'
  },
  {
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },{
    name: '0',
    desc: '0'
  },
]
