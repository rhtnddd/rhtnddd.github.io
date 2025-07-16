const buttons = document.querySelectorAll(".click");
let pianochim=window.localStorage.getItem('piano') || 0;
window.localStorage.setItem('piano', pianochim);
const sceneElements = {
    1: document.getElementById("scene1"),
    2: document.getElementById("scene2"),
    3: document.getElementById("scene3"),
    4: document.getElementById("scene4"),
    5: document.getElementById("scene5"),
    6: document.getElementById("scene6"),
    7: document.getElementById("scene7"),
    8: document.getElementById("scene8"),
    9: document.getElementById("scene9"),
    10: document.getElementById("scene10"),
    11: document.getElementById("scene11"),
    12: document.getElementById("scene12"),
    13: document.getElementById("scene13"),
    14: document.getElementById("scene14"),
    15: document.getElementById("scene15"),
    16: document.getElementById("scene16"),
    17: document.getElementById("scene17"),
    18: document.getElementById("scene18"),
    19: document.getElementById("scene19"),
    20: document.getElementById("scene20"),
    21: document.getElementById("scene21"),
    22: document.getElementById("scene22"),
    23: document.getElementById("scene23"),
    24: document.getElementById("scene24"),
    25: document.getElementById("scene25"),
    26: document.getElementById("scene26"),
    27: document.getElementById("scene27"),
    28: document.getElementById("scene28"),
    29: document.getElementById("scene29"),
    30: document.getElementById("scene30"),
    31: document.getElementById("scene31"),
    32: document.getElementById("scene32"),
    33: document.getElementById("scene33"),
    34: document.getElementById("scene34"),
    35: document.getElementById("scene35"),
    36: document.getElementById("scene36"),
    37: document.getElementById("scene37"),
    38: document.getElementById("scene38"),
    39: document.getElementById("scene39"),
    40: document.getElementById("scene40"),
    41: document.getElementById("scene41"),
    42: document.getElementById("scene42"),
    43: document.getElementById("scene43"),
    44: document.getElementById("scene44"),
    45: document.getElementById("scene45"),
    46: document.getElementById("scene46"),
    47: document.getElementById("scene47"),
    48: document.getElementById("scene48"),
    49: document.getElementById("scene49"),
    50: document.getElementById("scene50"),
    51: document.getElementById("scene51"),
    52: document.getElementById("scene52"),
    53: document.getElementById("scene53"),
    54: document.getElementById("scene54"),
    55: document.getElementById("scene55"),
    56: document.getElementById("scene56")

};
const audioClick = new Audio('決定ボタンを押す17.mp3');
const audioHover = new Audio('damaged3.mp3');
const sceneData = {
    scene2: {
        type: 'explanation',
        outputId: "explanation_s2",
        texts: [
            "본 게임의 내용은 <span style=\"color: red;\">픽션</span>입니다.<br>동명의 실제 인명, 단체, 장소, 사건과 무관합니다.",
            "\"지혜 공주, 6명의 남자친구, 그리고 6가지의 요일.<br>매일 다른 하루, 매일 다른 연애.<br>방과 후, 그들의 비밀스러운 연애가 시작된다.\"",
            "2025/XX/XX<br>월요일 방과후....",
        ],
        nextScene: 3
    },
    scene3: {
        type: 'story',
        nameId: "name_s3",
        outputId: "storyOutput_s3",
        elements: {
            threeChoice: "threechoice_s3",
            text: "text_s3",
            place1: "place1_s3",
            place2: "place2_s3",
            place3: "place3_s3"
        },
        stories: [
            {
                speaker: "지혜공주",
                text: "오늘수업이 끝났네..월남(월요일 남친)이랑 어디로 놀러갈까??",
                choices: [
                    { text: "헬스장", nextScene: 4 },
                    { text: "야구장", nextScene: 7 },
                    { text: "도서관", nextScene: 10 }
                ]
            }
        ]
    },
    scene4: {
        type: 'story',
        nameId: "name_s4",
        outputId: "storyOutput_s4",
        elements: {
            threeChoice: "threechoice_s4",
            text: "text_s4",
            place1: "place1_s4",
            place2: "place2_s4",
            place3: null
        },
        stories: [
            {
                speaker: "월남",
                text: "공주야 오늘은 왜 헬스장에 온거야?",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "월남아 내가 헬스장에 오자고 한 이유는.....",
                choices: [
                    {text: "너한테 운동 배우고 싶어서!", nextScene: 5 },
                    {text: "운동하는김에 너랑있으려고", nextScene: 6 }
                ]
            }
        ]
    },
    scene5: {
        type: 'story',
        nameId: "name_s5",
        outputId: "storyOutput_s5",
        elements: {
            threeChoice: null,
            text: "text_s5",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "지혜공주", text: "너가 운동을 잘하기도 하고 ㅎㅎ<br><span style=\"color: #FD92C3;\">(월남이의호감도가 10상승하였습니다.)</span>", choices: null },
            { speaker: "월남", text: "공주야 월남이가 천천히 알려줄게", choices: null },
            { speaker: "월남", text: "자세 무너지면 바로 잡아줄 거야.", choices: null },
            { speaker: "지혜공주", text: "오~ 든든하다.", choices: null}
        ],
        nextScene: 13
    },
    scene6: {
        type: 'story',
        nameId: "name_s6",
        outputId: "storyOutput_s6",
        elements: {
            threeChoice: null,
            text: "text_s6",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "지혜공주", text: "운동도하고 너도 보면 1석2조 잖아~<br><span style=\"color: #4C46FF;\">(월남이의호감도가 15하락하였습니다.)</span>", choices: null },
            { speaker: "월남", text: "그렇구나...너는 운동 겸 나 보러 온 거고,<br>난 그냥 너랑 있으려고 온 건데?", choices: null },
            { speaker: "지혜공주", text: "뭐야, 왜 갑자기 삐졌어?", choices: null },
            { speaker: "월남", text: "그냥 좀 그렇다고<br>괜히 나 혼자 좋아하는 느낌이라서.", choices: null },
            { speaker: "지혜공주", text: "바보야, 나도 좋아하니까 이렇게 같이 있는 거잖아.<br>괜히 그런 생각 하지 마.", choices: null },
            { speaker: "월남", text: "…진짜지?<br>그 말, 취소 못 한다?", choices: null}
        ],
        nextScene: 13
    },
    scene7: {
        type: 'story',
        nameId: "name_s7",
        outputId: "storyOutput_s7",
        elements: {
            threeChoice: "threechoice_s7",
            text: "text_s7",
            place1: "place1_s7",
            place2: "place2_s7",
            place3: null
        },
        stories: [
            {
                speaker: "월남",
                text: "공주야 오늘은 왜 야구장에 온거야?",
                choices: [
                    {text: "너가 야구장 가고싶다 했잖아", nextScene: 8 },
                    {text: "오늘은 너랑 같은 걸 보고 싶었어", nextScene: 9 }
                ]
            }
        ]
    },
    scene8: {
        type: 'story',
        nameId: "name_s8",
        outputId: "storyOutput_s8",
        elements: {
            threeChoice: null,
            text: "text_s8",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "월남", text: "이번 주 월요일에 야구장 가고 싶었는데 내 생각해 줘서 고마워<br><span style=\"color: #FD92C3;\">(월남이의 호감도가 10상승하였습니다.)</span>", choices: null },
            { speaker: "지혜공주", text: "당연하지~ 우리 월남이 소원은 내가 다 들어줘야지~", choices: null },
            { speaker: "월남", text: "진짜 나 오늘 기분 최고야. 너랑 야구 보니까 더 재밌다.", choices: null}
        ],
        nextScene: 13
    },
    scene9: {
        type: 'story',
        nameId: "name_s9",
        outputId: "storyOutput_s9",
        elements: {
            threeChoice: null,
            text: "text_s9",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "월남", text: "진짜...? 그런 말 들으니까 너무 좋다..그래서 내가 오늘 더 잘해줘야겠다~ 고마워.<br><span style=\"color: #FD92C3;\">(월남이의 호감도가 15상승하였습니다.)</span>", choices: null },
            { speaker: "지혜공주", text: "그렇게 말해주는 네가 더 고맙지.<br>오늘은 그냥 너 옆에 있는 게 좋아. 시끄러워도 편해.", choices: null },
            { speaker: "월남", text: "나도 그래. 오늘 소음은 그냥 배경음이야.<br>주인공은 우리 둘이잖아.", choices: null},
        ],
        nextScene: 13
    },
    scene10: {
        type: 'story',
        nameId: "name_s10",
        outputId: "storyOutput_s10",
        elements: {
            threeChoice: "threechoice_s10",
            text: "text_s10",
            place1: "place1_s10",
            place2: "place2_s10",
            place3: null
        },
        stories: [
            {
                speaker: "월남",
                text: "공주야 오늘은 왜 도서관에 온거야?",
                choices: [
                    {text: "공부하러 왔지. 왜 그런 걸 물어?", nextScene: 11 },
                    {text: "너랑 조용히 같이 있고 싶어서", nextScene: 12 }
                ]
            }
        ]
    },
    scene11: {
        type: 'story',
        nameId: "name_s11",
        outputId: "storyOutput_s11",
        elements: {
            threeChoice: null,
            text: "text_s11",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "월남", text: "아니… 그냥 궁금해서 물어본 건데...<br><span style=\"color: #1E00FF;\">(월남이의호감도가 20하락하였습니다.)</span>", choices: null },
            { speaker: "지혜공주", text: "궁금할 걸 궁금해. 공부하러 도서관 오는 거 당연한 거 아냐?", choices: null },
            { speaker: "월남", text: "그냥 말 한 마디 했을 뿐인데…<br>됐고, 나도 이제 말 안해. 말 시키지 마.", choices: null },
            { speaker: "지혜공주", text: "그래~ 말 안 하는 거 좋아.<br>근데 너 삐졌냐?", choices: null },
            { speaker: "월남", text: "아닌데? 말 시키지 말랬잖아?", choices: null },
            { speaker: "지혜공주", text: "ㅋㅋㅋ 아 됐어.<br>진짜 애같이 굴지 마. 공부 끝나면 간단한 술 한잔이나 하러가자", choices: null },
            { speaker: "월남", text: "두말하기 없어..<br><span style=\"color: #FD92C3;\">(월남이의호감도가 5상승하였습니다.)</span>", choices: null},
        ],
        nextScene: 13
    },
    scene12: {
        type: 'story',
        nameId: "name_s12",
        outputId: "storyOutput_s12",
        elements: {
            threeChoice: null,
            text: "text_s12",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "월남", text: "나도 너랑 조용히 이렇게 있는 거 너무 좋아.<br><span style=\"color: #FD92C3;\">(월남이의 호감도가 15상승하였습니다.)</span>", choices: null },
            { speaker: "지혜공주", text: "그냥 네 옆에 있으면 마음이 편해져서 그래.<br>공부하는 네 모습도 너무 멋져 보여서 자꾸만 보고 싶어져.", choices: null },
            { speaker: "월남", text: "그렇게 말해주니까 나도 힘이 나네.<br>앞으로도 가끔 이렇게 조용히 같이 있을 수 있으면 좋겠다.", choices: null},
            { speaker: "지혜공주", text: "응, 우리 서로 힘이 되어주면서 오래오래 같이 있자.", choices: null }
        ],
        nextScene: 13
    },
    scene13: {
        type: 'explanation',
        outputId: "explanation_s13",
        texts: [
            "2025/XX/XX<br>화요일 저녁시간...."
        ],
        nextScene: 14
    },
    scene14: {
        type: 'story',
        nameId: "name_s14",
        outputId: "storyOutput_s14",
        elements: {
            threeChoice: "threechoice_s14",
            text: "text_s14",
            place1: "place1_s14",
            place2: "place2_s14",
            place3: null
        },
        stories: [
            {
                speaker: "지혜공주",
                text: "하.....고민이네..",
                choices: null
            },
            {
                speaker: "박건우쌤",
                text: "무슨일 이에요?",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "제 목요일 남친이 롤을 좋아하는데<br>제가 잘하지 못해서...",
                choices: null
            },
            {
                speaker: "박건우쌤",
                text: "제가 조금 알려드릴까요?",
                choices: [
                    {text: "네 알려주세요!", nextScene: 15 },
                    {text: "괜찮을것 같아요.", nextScene: 16 }
                ]
            }
        ]
    },
    scene15: {
        type: 'story',
        nameId: "name_s15",
        outputId: "storyOutput_s15",
        elements: {
            threeChoice: null,
            text: "text_s15",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "박건우쌤", text: "롤캐릭만 다알아도 남친이 더욱 반할거에요.<br>간단한 게임을 해볼까요?", choices: null }
        ],
        nextScene:'quizGame'
    },
    scene16: {
        type: 'story',
        nameId: "name_s15",
        outputId: "storyOutput_s15",
        elements: {
            threeChoice: null,
            text: "text_s15",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "박건우쌤", text: "데이트 잘하시고 오세요.", choices: null }
        ],
        nextScene: 18
    },
    scene18: {
        type: 'explanation',
        outputId: "explanation_s18",
        texts: [
            "2025/XX/XX<br>수요일 방과후...."
        ],
        nextScene: 19
    },
    scene19: {
        type: 'story',
        nameId: "name_s19",
        outputId: "storyOutput_s19",
        elements: {
            threeChoice: "threechoice_s19",
            text: "text_s19",
            place1: "place1_s19",
            place2: "place2_s19",
            place3: "place3_s19"
        },
        stories: [
            {
                speaker: "지혜공주",
                text: "수남(수요일 남친)이가 어디 가자고 하네 어디로 가지?",
                choices: [
                    { text: "드라이브", nextScene: 20 },
                    { text: "오마카세", nextScene: 23 },
                    { text: "명퓸샵", nextScene: 26 }
                ]
            }
        ]
    },
    scene20: {
        type: 'story',
        nameId: "name_s20",
        outputId: "storyOutput_s20",
        elements: {
            threeChoice: "threechoice_s20",
            text: "text_s20",
            place1: "place1_s20",
            place2: "place2_s20",
            place3: null
        },
        stories: [
            {
                speaker: "수남",
                text: "오늘 날씨 좋지 않아요? 이럴 때 어디 카페에서 쉬다가면 좋은데<br>잠시 쉬다갈까요?",
                choices: [
                    {text: "좋아! 디저트 많이 먹자!", nextScene: 21 },
                    {text: "잠깐 쉬다 가자. 너랑 있는 게 제일 좋긴 한데.", nextScene: 22 }
                ]
            }
        ]
    },
    scene21: {
        type: 'story',
        nameId: "name_s21",
        outputId: "storyOutput_s21",
        elements: {
            threeChoice: null,
            text: "text_s21",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "지혜공주", text: "나랑 같이 디저트 먹으니까 기분 좋지?<br><span style=\"color: #FD92C3;\">(수남이의 호감도가 10상승하였습니다.)</span>", choices: null },
            { speaker: "수남", text: "그럼요, 같이 있으니까 뭐든 다 맛있어요.<br>사실… 공주님이랑 같이 있는 게 제일 좋거든요.", choices: null },
            { speaker: "지혜공주", text: "앗 뭐야~ 갑자기 그렇게 말하면 설레잖아ㅎㅎ<br>그럼 디저트 말고도 더 시켜야겠는데?", choices: null},
            { speaker: "수남", text: "원하시는 거 다 시켜도 괜찮아요.<br>오늘은 공주님 기분 좋은 게 1순위니까요.", choices: null }
        ],
        nextScene: 27
    },
    scene22: {
        type: 'story',
        nameId: "name_s22",
        outputId: "storyOutput_s22",
        elements: {
            threeChoice: null,
            text: "text_s22",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "지혜공주", text: "너랑 같이 있어서 그런지 더 좋은것 같아<br><span style=\"color: #FD92C3;\">(수남이의 호감도가 15상승하였습니다.)</span>", choices: null },
            { speaker: "수남", text: "저도요.<br>사실 요즘 제일 좋아하는 시간이, 이렇게 아무 이유 없이 당신이랑 있는 순간이에요.", choices: null },
            { speaker: "지혜공주", text: "…그 말, 진짜 설렌다.<br>그럼 우리 아무 이유 없이 더 자주 보자.", choices: null}
        ],
        nextScene: 27
    },
    scene23: {
        type: 'story',
        nameId: "name_s23",
        outputId: "storyOutput_s23",
        elements: {
            threeChoice: "threechoice_s23",
            text: "text_s23",
            place1: "place1_s23",
            place2: "place2_s23",
            place3: null
        },
        stories: [
            {
                speaker: "수남",
                text: "오늘은 내가 살게요 많이 먹으세요.",
                choices: [
                    {text: "그래… 뭐. 그럼 니가 내. ", nextScene: 24 },
                    {text: "그럼 나도 다음엔 더 맛있는 거 사줄 거니까 기대해~", nextScene: 25 }
                ]
            }
        ]
    },
    scene24: {
        type: 'story',
        nameId: "name_s24",
        outputId: "storyOutput_s24",
        elements: {
            threeChoice: null,
            text: "text_s24",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "수남", text: "...조금 서운하네요.<br>제가 사겠다는데, 반응이 너무 무심한 거 아니에요?", choices: null },
            { speaker: "지혜공주", text: "아니, 그냥 평소처럼 받아준 건데 왜 그래?<br>갑자기 왜 예민하게 받아들이는데?<br><span style=\"color: #1E00FF;\">(수남이의호감도가 20하락하였습니다.)</span)", choices: null },
            { speaker: "수남", text: "예민하게 받아들인 게 아니라...<br>그냥 가끔은 고맙다고 해주시면 기분이 좋을 것 같아서요.", choices: null},
            { speaker: "지혜공주", text: "…그럼, 고마워.<br>됐지?", choices: null }
        ],
        nextScene: 27
    },
    scene25: {
        type: 'story',
        nameId: "name_s25",
        outputId: "storyOutput_s25",
        elements: {
            threeChoice: null,
            text: "text_s25",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "수남", text: ".그런 말 해주는 네가 더 고마워요.<br>뭔가… 나 혼자만 좋아하는 거 아닌 것 같아서 기분 좋네요.<br><span style=\"color: #FD92C3;\">(수남이의 호감도가 10상승하였습니다.)</span>", choices: null },
            { speaker: "지혜공주", text: "당연히 나도 좋으니까 이러고 있는 거지<br>우리 다음엔 진짜 더 맛있는 거 먹으러 가자!", choices: null }
        ],
        nextScene: 27
    },
    scene26: {
        type: 'story',
        nameId: "name_s26",
        outputId: "storyOutput_s26",
        elements: {
            threeChoice: null,
            text: "text_s26",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "수남", text: "원하는거 있어요? 다사드릴게요.", choices: null },
            { speaker: "지혜공주", text: "에이 안 이래도 되는데, 사주니까 잘 받을게!", choices: null },
            { speaker: "수남", text: "너가 받는다니 나도 기분 좋네요.<br><span style=\"color: #FD92C3;\">(수남이의 호감도가 10상승하였습니다.)</span>", choices: null },
            { speaker: "지혜공주", text: "고마워, 네가 이렇게 챙겨주니까 더 사랑스러워 보여.", choices: null },
            { speaker: "수남", text: "너 행복한 게 내 기쁨이에요. 앞으로도 많이 웃게 해줄게요.", choices: null }
        ],
        nextScene: 27
    },
    scene27: {
        type: 'explanation',
        outputId: "explanation_s27",
        texts: [
            "2025/XX/XX<br>목요일 방과후...."
        ],
        nextScene: 28
    },
    scene28: {
        type: 'story',
        nameId: "name_s28",
        outputId: "storyOutput_s28",
        elements: {
            threeChoice: "threechoice_s28",
            text: "text_s28",
            place1: "place1_s28",
            place2: "place2_s28",
            place3: null
        },
        stories: [
            {
                speaker: "지혜공주",
                text: "벌써 목요일이네...목남(목요일 남친)이랑 뭐하고 놀지?",
                choices: [
                    {text: "게임하기", nextScene: 29 },
                    {text: "요리하기", nextScene: 32 }
                ]
            }
        ]
    },
    scene29: {
        type: 'story',
        nameId: "name_s29",
        outputId: "storyOutput_s29",
        elements: {
            threeChoice: "threechoice_s29",
            text: "text_s29",
            place1: "place1_s29",
            place2: "place2_s29",
            place3: null
        },
        stories: [
            {
                speaker: "목남",
                text: "공주야 같이 게임을 하고 싶다며 진작말하지<br>그리고 티모모자쓴거 귀엽네",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "그치? 나 티모 모자 완전 마음에 들어! 같이 게임하면 더 재밌을 것 같아~ 빨리 같이 하자!",
                choices: [
                    {text: "너랑 게임하려고 연습했어!(박건우 선생님과 게임연습을 마쳐야 잠금이 해제됩니다.)", nextScene: 30 },
                    {text: "너한테 게임 배워보고 싶어서!", nextScene: 31 }
                ]
            }
        ]
    },
    scene30: {
        type: 'story',
        nameId: "name_s30",
        outputId: "storyOutput_s30",
        elements: {
            threeChoice: null,
            text: "text_s30",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "목남", text: "오~ 숨겨둔 실력 있었구나? 나만 진지하게 했던 거 아니야?<br><span style=\"color: #FD92C3;\">(목남이의 호감도가 20상승하였습니다.)</span>", choices: null },
            { speaker: "지혜공주", text: "몰랐지? 나 진짜 연습 많이 했어. 오늘 너 깜짝 놀랄걸?", choices: null },
            { speaker: "목남", text: "좋아, 그런 자신감 좋아해. 근데 지면 울지 마~", choices: null }
        ],
        nextScene: 35
    },
    scene31: {
        type: 'story',
        nameId: "name_s31",
        outputId: "storyOutput_s31",
        elements: {
            threeChoice: null,
            text: "text_s31",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "목남", text: "그럼 자리 잡고 바로 시작하자! 오늘은 내가 진짜 제대로 가르쳐줄게.<br><span style=\"color: #FD92C3;\">(목남이의 호감도가 10상승하였습니다.)</span>", choices: null },
            { speaker: "지혜공주", text: "좋아! 너랑 같이 하면 금방 실력 늘 것 같아. 빨리 게임하자!", choices: null }
        ],
        nextScene: 35
    },
    scene32: {
        type: 'story',
        nameId: "name_s32",
        outputId: "storyOutput_s32",
        elements: {
            threeChoice: "threechoice_s32",
            text: "text_s32",
            place1: "place1_s32",
            place2: "place2_s32",
            place3: null
        },
        stories: [
            {
                speaker: "목남",
                text: "공주야 나랑 요리 하고 싶다며 진작 말하지 같이 맛있는 요리 만들자",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "사실 너랑 같이 요리하는 거 오래전부터 해보고 싶었어.<br>오늘은 내가 너 도와줄 테니까 꼭 맛있게 만들자!",
                choices: null
            },
            {
                speaker: "목남",
                text: "마늘 내가 썰게, 너는 면 삶아줄수있어?.",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "면 익었어! 면수도 살짝 남겼어.",
                choices: null
            },
            {
                speaker: "목남",
                text: "역시 센스 있네?<br>볶는 건 내가 할게.",
                choices: null
            },
            {
                speaker: "목남",
                text: "다 만들었다.<br>이제 먹어볼까?",
                choices: [
                    {text: "천상의 맛이야!!", nextScene: 33 },
                    {text: "조금 싱거운데??..", nextScene: 34 }
                ]
            }
        ]
    },
    scene33: {
        type: 'story',
        nameId: "name_s33",
        outputId: "storyOutput_s33",
        elements: {
            threeChoice: null,
            text: "text_s33",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "목남", text: "그래? 그럼 매주 요리 데이트 예약이다~<br><span style=\"color: #FD92C3;\">(목남이의 호감도가 10상승하였습니다.)</span>", choices: null },
        ],
        nextScene: 35
    },
    scene34: {
        type: 'story',
        nameId: "name_s34",
        outputId: "storyOutput_s34",
        elements: {
            threeChoice: null,
            text: "text_s34",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "목남", text: "그래? 그럼 다음엔 간을 좀 잘 맞혀봐야겠다.<br><span style=\"color: #FD92C3;\">(목남이의 호감도가 10상승하였습니다.)</span>", choices: null },
        ],
        nextScene: 35
    },
    scene35: {
        type: 'explanation',
        outputId: "explanation_s35",
        texts: [
            "2025/XX/XX<br>금요일 점심시간...."
        ],
        nextScene: 36
    },
    scene36: {
        type: 'story',
        nameId: "name_s36",
        outputId: "storyOutput_s36",
        elements: {
            threeChoice: "threechoice_s36",
            text: "text_s36",
            place1: "place1_s36",
            place2: "place2_s36",
            place3: null
        },
        stories: [
            {
                speaker: "지혜공주",
                text: "하.....고민이네..",
                choices: null
            },
            {
                speaker: "최병준쌤",
                text: "무슨 고민 있나요?~",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "금요일남친이랑 노래방을 갈려고 하는데<br>제가 노래를 잘못불러서..",
                choices: null
            },
            {
                speaker: "최병준쌤",
                text: "제가 도움을 도와드려도 될까요?~",
                choices: [
                    { text: "네 도와주세요!", nextScene: 37 },
                    { text: "괜찮을것 같아요.", nextScene: 38 }
                ]
            }
        ]
    },
    scene37: {
        type: 'story',
        nameId: "name_s37",
        outputId: "storyOutput_s37",
        elements: {
            threeChoice: null,
            text: "text_s37",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "최병준쌤", text: "노래를 부를때는 박자도 중요하지만 음을 잘아는것이 중요한것같아요.<br>그러니 피아노 게임을 통해 음을 정확히 아는것을 해볼까요?", choices: null },
        ],
        nextScene: 39
    },
    scene38: {
        type: 'story',
        nameId: "name_s38",
        outputId: "storyOutput_s38",
        elements: {
            threeChoice: null,
            text: "text_s38",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "최병준쌤", text: "아니요! 제가 꼭 가르쳐드릴게요~", choices: null },
        ],
        nextScene: 37
    },
    scene40: {
        type: 'explanation',
        outputId: "explanation_s40",
        texts: [
            "2025/XX/XX<br>금요일 방과후...."
        ],
        nextScene: 41
    },
    scene41: {
        type: 'story',
        nameId: "name_s41",
        outputId: "storyOutput_s41",
        elements: {
            threeChoice: "threechoice_s41",
            text: "text_s41",
            place1: "place1_s41",
            place2: "place2_s41",
            place3: null
        },
        stories: [
            {
                speaker: "지혜공주",
                text: "드디어 불금!! 금남(금요일 남친)이랑 어디로 놀러가지?",
                choices: [
                    { text: "노래방", nextScene: 42 },
                    { text: "인생네컷", nextScene: 46 }
                ]
            }
        ]
    },
    scene42: {
        type: 'story',
        nameId: "name_s42",
        outputId: "storyOutput_s42",
        elements: {
            threeChoice: "threechoice_s42",
            text: "text_s42",
            place1: "place1_s42",
            place2: "place2_s42",
            place3: "place3_s42"
        },
        stories: [
            {
                speaker: "금남",
                text: "여기 노래방, 조용하고 좋아. 사람도 없고.",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "응...너랑 오니까 더 좋은 것 같아.",
                choices: null
            },
            {
                speaker: "?",
                text: "(금남은 마이크를 들고 앉아, 차분히 발라드를 부른다. 목소리는 부드럽고 따뜻하다. 여자는 듣다가 무심코 숨을 멈춘다.)",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "매주 듣는데도 또 감동이야.",
                choices: null
            },
            {
                speaker: "금남",
                text: "그럼 이번엔 너 차례. 부를 수 있겠어?",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "사실… 오늘은 꼭 부르고 싶은 노래가 있어.",
                choices: null
            },
            {
                speaker: "?",
                text: "(심호흡하고 마이크를 든다. 손끝이 떨리지만 눈은 진지하다. 그리고 익숙하지 않은 음정 속에서도 마음을 담아 불러낸다.)<br>(가사는 한 사람을 오래 바라보며 닮아가고 싶었던 이야기.)",
                choices: null
            },
            {
                speaker: "금남",
                text: "...지금, 나 조금 반했어.<br>연습했지? …그 마음이, 가사보다 더 와 닿았어.",
                choices: [
                    { text: "(조용히 그의 손을 잡는다)", nextScene: 43 },
                    { text: "좀 많이… 준비했었어. 너한테 잘 보이고 싶어서.", nextScene: 44 },
                    { text: "(그냥 조용히 미소 짓는다)", nextScene: 45 }
                ]
            }
        ]
    },
    scene43: {
        type: 'story',
        nameId: "name_s43",
        outputId: "storyOutput_s43",
        elements: {
            threeChoice: null,
            text: "text_s43",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "금남", text: "말 안 해도 알 것 같아. 지금 이 마음.<br><span style=\"color: #FD92C3;\">(금남이의 호감도가 10상승하였습니다.)</span>", choices: null },
        ],
        nextScene: 35
    },
    scene44: {
        type: 'story',
        nameId: "name_s44",
        outputId: "storyOutput_s44",
        elements: {
            threeChoice: null,
            text: "text_s44",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "금남", text: "충분히 멋졌어.<br><span style=\"color: #FD92C3;\">(금남이의 호감도가 20상승하였습니다.)</span>", choices: null },
        ],
        nextScene: 35
    },
    scene45: {
        type: 'story',
        nameId: "name_s45",
        outputId: "storyOutput_s45",
        elements: {
            threeChoice: null,
            text: "text_s45",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "금남", text: "괜찮아. 나, 이미 네 마음 알아.<br><span style=\"color: #FD92C3;\">(금남이의 호감도가 10상승하였습니다.)</span>", choices: null },
        ],
        nextScene: 35
    },
    scene46: {
        type: 'story',
        nameId: "name_s46",
        outputId: "storyOutput_s46",
        elements: {
            threeChoice: "threechoice_s46",
            text: "text_s46",
            place1: "place1_s46",
            place2: "place2_s46",
            place3: null
        },
        stories: [
            {
                speaker: "지혜공주",
                text: "금남아! 우리 인생네컷 찍을래?",
                choices: null
            },
            {
                speaker: "금남",
                text: "어…? 갑자기?<br>그래. 네가 원하면, 찍어야지.",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "첫 컷은 웃는 거, 두 번째는 브이~ 세 번째는 뽀짝, 마지막은… 나중에 생각하자!",
                choices: null
            },
            {
                speaker: "금남",
                text: "그 마지막이 제일 무서운 거 알지?",
                choices: null
            },
            {
                speaker: "?",
                text: "(찰칵. 둘이 어색하게 웃고, 장난도 치고, 손가락 하트도 만든다.)",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "우와~ 너무 잘 나왔다! …근데, 너 표정 왜 이렇게 딱딱해?",
                choices: null
            },
            {
                speaker: "금남",
                text: "..그냥, 네 옆에 있으니까. 어디 봐야 할지도 모르겠더라.",
                choices: [
                    { text: "(사진을 조용히 접는다)", nextScene: 47 },
                    { text: "(조용히 미소 지으며 그의 손을 잡는다)", nextScene: 48 }
                ]
            }
        ]
    },
    scene47: {
        type: 'story',
        nameId: "name_s47",
        outputId: "storyOutput_s47",
        elements: {
            threeChoice: null,
            text: "text_s47",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "지혜공주", text: "..그냥, 나 혼자 신났던 것 같네.<br><span style=\"color: #2b00ffff;\">(금남이의 호감도가 20하락하였습니다.)</span>", choices: null },
        ],
        nextScene: 49
    },
    scene48: {
        type: 'story',
        nameId: "name_s48",
        outputId: "storyOutput_s48",
        elements: {
            threeChoice: null,
            text: "text_s48",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "지혜공주", text: "사진은 엉망이어도.. 오늘은 기억에 남을 것 같아.<br><span style=\"color: #FD92C3;\">(금남이의 호감도가 10상승하였습니다.)</span>", choices: null },
        ],
        nextScene: 49
    },
    scene49: {
        type: 'explanation',
        outputId: "explanation_s49",
        texts: [
            "2025/XX/XX<br>토요일 저녁시간...."
        ],
        nextScene: 50
    },
    scene50: {
        type: 'story',
        nameId: "name_s50",
        outputId: "storyOutput_s50",
        elements: {
            threeChoice: "threechoice_s50",
            text: "text_s50",
            place1: "place1_s50",
            place2: "place2_s50",
            place3: null
        },
        stories: [
            {
                speaker: "지혜공주",
                text: "토남(토요일 남친)이나 보러가야지",
                choices: [
                    { text: "유치원", nextScene: 51 },
                    { text: "놀이동산", nextScene: null }
                ]
            }
        ]
    },
     scene51: {
        type: 'story',
        nameId: "name_s51",
        outputId: "storyOutput_s51",
        elements: {
            threeChoice: "threechoice_s51",
            text: "text_s51",
            place1: "place1_s51",
            place2: "place2_s51",
            place3: null
        },
        stories: [
            {
                speaker: "토남",
                text: "일주일 만이네요. 진짜 오랜만이에요.",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "그러게. 일주일인데 왜 이렇게 오래된 느낌이지?",
                choices: null
            },
            {
                speaker: "토남",
                text: "보고 싶었어요. 많이요.",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "나도. 그래서 왔어.",
                choices: null
            },
            {
                speaker: "짱구",
                text: "예~~~~쁜 누나!!!<br>오랜만이에요! 누나 어디 갔다 왔어요?",
                choices: null
            },
            {
                speaker: "지혜공주",
                text: "음... 좀 바빴어. 왜, 보고 싶었어?",
                choices: null
            },
            {
                speaker: "짱구",
                text: "당연하죠! 누나 없어서 유치원 심심했어요!<br>혹시 원장쌤이랑 다시 데이트예요?",
                choices: [
                    { text: "응. 우리 사귀잖아.", nextScene: 52 },
                    { text: "너처럼 귀엽진 않아도 괜찮은 사람이야.", nextScene: 53 }
                ]
            }
        ]
    },
    scene52: {
        type: 'story',
        nameId: "name_s52",
        outputId: "storyOutput_s52",
        elements: {
            threeChoice: null,
            text: "text_s52",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "지혜공주", text: "응. 우리 사귀잖아. 네가 제일 먼저 알아챈 거네?<br><span style=\"color: #FD92C3;\">(토남이의 호감도가 10상승하였습니다.)</span>", choices: null },
            { speaker: "짱구", text: "우와! 진짜구나! 그럼 나중에 결혼도 해요?", choices: null },
            { speaker: "토남", text: "그건 아직 비밀이에요, 짱구 씨.", choices: null },
            { speaker: "지혜공주", text: "비밀이라더라~ 그러니까 너도 조용히 하고 있어.", choices: null }
        ],
        nextScene: 54
    },
    scene53: {
        type: 'story',
        nameId: "name_s53",
        outputId: "storyOutput_s53",
        elements: {
            threeChoice: null,
            text: "text_s53",
            place1: null,
            place2: null,
            place3: null
        },
        stories: [
            { speaker: "지혜공주", text: "너처럼 귀엽진 않아도 괜찮은 사람이야. 나한텐.<br><span style=\"color: #FD92C3;\">(토남이의 호감도가 15상승하였습니다.)</span>", choices: null },
            { speaker: "짱구", text: "엥~ 그럼 누나는 귀여운 사람보다 멋진 사람이 좋은 거예요?", choices: null },
            { speaker: "토남", text: "어? 갑자기 묘하게 기대되네요.", choices: null },
            { speaker: "지혜공주", text: "둘 다 아니니까 기대하지 마.", choices: null }
        ],
        nextScene: 54
    },
    scene54: {
        type: 'explanation',
        outputId: "explanation_s54",
        texts: [
            "2025/XX/XX<br>일남(일요일 남친)이 지혜공주를 만나러 가는중...."
        ],
        nextScene: 55
    },
    scene55: {
        type: 'explanation',
        outputId: "explanation_s55",
        texts: [
            "교통사고를 당해 모든 기억을 잃게되고 지혜공주도 있게되어<br>지혜공주와 일남은 만나지 못하게되었다."
        ],
        nextScene: 56
    },
    scene56: {
        type: 'explanation',
        outputId: "explanation_s55",
        texts: [
            "결말이 미흡한 작품을 보고도 플레이 해주셔서 감사합니다."
        ],
        nextScene: null
    },
};
let scene5current=0;
let scene6current=0;
let scene7current=0;
let scene10current=0;
let scene11current=0;
let scene12current=0;
let scene14current=0;
let scene20current=0;
let scene23current=0;
let scene29current=0;
let scene31current=0;
let scene32current=0;
let scene36current=0;
let scene42current=0;
let scene46current=0;
let scene51current=0;
let quiztrue=false;
let currentSceneKey;
let currentSceneData;
let currentTextIndex = 0;
let typingInterval;
let charIndex = 0;
let isTyping = false;
let fullContent = "";
let outputElement;
let currentNameElement = null;
let currentStoryTextSourceElement = null;
let currentStoryOutputElement = null;
let currentThreechoiceElement = null;
let currentTextElement = null;
let currentPlace1Button = null, currentPlace2Button = null, currentPlace3Button = null;
let currentPlace1Container = null, currentPlace2Container = null, currentPlace3Container = null;

function startTyping(sourceText, targetElement, onCompleteCallback) {
    if (isTyping) clearInterval(typingInterval);

    fullContent = sourceText;
    outputElement = targetElement;
    charIndex = 0;
    isTyping = true;
    if (outputElement) outputElement.innerHTML = '';
    if (currentSceneData.type === 'story') {
        if (currentNameElement) currentNameElement.style.display = 'block';
        if (currentTextElement) currentTextElement.style.display = 'block';
        if (outputElement) outputElement.style.display = 'block';
    } else if (currentSceneData.type === 'explanation') {
        if (outputElement) outputElement.style.display = 'block';
    }
    typingInterval = setInterval(() => {
        if (charIndex <= fullContent.length) {
            let currentOutputHtml = '';
            let i = 0;
            while (i < charIndex) {
                let char = fullContent[i];
                if (char === '<') {
                    let tagEndIndex = fullContent.indexOf('>', i);
                    if (tagEndIndex !== -1) {
                        currentOutputHtml += fullContent.substring(i, tagEndIndex + 1);
                        i = tagEndIndex + 1;
                    } else {
                        currentOutputHtml += char;
                        i++;
                    }
                } else {
                    currentOutputHtml += char;
                    i++;
                }
            }
            if (outputElement) {
                outputElement.innerHTML = currentOutputHtml;
            }
            charIndex++;
        } else {
            clearInterval(typingInterval);
            isTyping = false;
            if (onCompleteCallback) {
                onCompleteCallback();
            }
        }
    }, 30);
}

function initializeScene(sceneNumber) {
    if (sceneNumber === 17) {
        Object.values(sceneElements).forEach(el => el.style.display = 'none');
        document.getElementById("scene17").style.display = "block";
        startQuizGame();
        return;
    }
    else if (sceneNumber === 39) {
        document.location = '/html.html';
        return;
    }
    Object.values(sceneElements).forEach(el => el.style.display = 'none');
    document.querySelectorAll('.name, .story-text, .story, .text, .threechoice, .choice1, .choice2, .choice3, .twochoice1, .twochoice2')
            .forEach(el => el.style.display = 'none');
    document.querySelectorAll('.threechoicebutton').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.explanation-output').forEach(el => {
        el.innerHTML = '';
        el.style.display = 'none';
    });

    currentSceneKey = `scene${sceneNumber}`;
    currentSceneData = sceneData[currentSceneKey];
    currentTextIndex = 0;

    if (sceneElements[sceneNumber]) {
        sceneElements[sceneNumber].style.display = 'block';
    }

    if (currentSceneData.type === 'explanation') {
        const explanationOutputElement = document.getElementById(currentSceneData.outputId);
        if (explanationOutputElement) {
            explanationOutputElement.style.display = 'block';
            startTyping(currentSceneData.texts[currentTextIndex], explanationOutputElement, handleExplanationComplete);
        } else {
            console.error(`Explanation output element with ID '${currentSceneData.outputId}' not found for scene ${sceneNumber}.`);
        }
    } else if (currentSceneData.type === 'story') {
        const sceneIdSuffix = `s${sceneNumber}`;
        currentNameElement = document.getElementById(`name_${sceneIdSuffix}`);
        currentStoryOutputElement = document.getElementById(`storyOutput_${sceneIdSuffix}`);
        currentThreechoiceElement = document.getElementById(`threechoice_${sceneIdSuffix}`);
        currentTextElement = document.getElementById(`text_${sceneIdSuffix}`);
        currentPlace1Button = document.getElementById(`place1_${sceneIdSuffix}`);
        currentPlace2Button = document.getElementById(`place2_${sceneIdSuffix}`);
        currentPlace3Button = document.getElementById(`place3_${sceneIdSuffix}`);
        currentPlace1Container = document.querySelector(`#scene${sceneNumber} .choice1`) || document.querySelector(`#scene${sceneNumber} .twochoice1`);
        currentPlace2Container = document.querySelector(`#scene${sceneNumber} .choice2`) || document.querySelector(`#scene${sceneNumber} .twochoice2`);
        currentPlace3Container = document.querySelector(`#scene${sceneNumber} .choice3`);

        if (currentSceneData.stories && currentSceneData.stories.length > 0 && currentStoryOutputElement) {
            if (currentSceneData.stories[0].speaker && currentNameElement) {
                currentNameElement.textContent = currentSceneData.stories[0].speaker;
            }
            startTyping(currentSceneData.stories[currentTextIndex].text, currentStoryOutputElement, handleStoryComplete);
        } else {
            console.warn(`씬 ${sceneNumber}에 스토리가 없거나 출력 요소가 없습니다.`);
        }
    }
}

function handleExplanationComplete() {
    setTimeout(() => {
        currentTextIndex++;
        const explanationOutputElement = document.getElementById(currentSceneData.outputId);
        if (currentTextIndex < currentSceneData.texts.length) {
            if (explanationOutputElement) {
                startTyping(currentSceneData.texts[currentTextIndex], explanationOutputElement, handleExplanationComplete);
            }
        } else {
            if (currentSceneData.nextScene) {
                if (explanationOutputElement) {
                    explanationOutputElement.innerHTML = '';
                    explanationOutputElement.style.display = 'none';
                }
                initializeScene(currentSceneData.nextScene);
            } else {
                console.log("모든 설명 완료, 다음 씬 지정 안됨.");
                if (explanationOutputElement) {
                    explanationOutputElement.innerHTML = '';
                    explanationOutputElement.style.display = 'none';
                }
            }
        }
    }, 1500);
}
function handleStoryComplete() {
    setTimeout(() => {
        if (currentSceneKey === "scene5") {
            if (scene5current === 0) {
                const helth = document.getElementById("helthtecher_s5");
                const happy = document.getElementById("happyhand_s5");
                if (helth && happy) {
                    happy.style.display = "none";
                    helth.style.display = "block";
                }
            } else if (scene5current === 1) {
                const helthch = document.getElementById("helthch");
                const phonech = document.getElementById("phonech");
                if (helthch && phonech) {
                    phonech.style.display = "none";
                    helthch.style.display = "block";
                }
            }
        }
        else if (currentSceneKey === "scene6") {
            if (scene6current === 0) {
                const happyhand = document.getElementById("happyhand_s6");
                const chilly = document.getElementById("chilly");
                if (happyhand && chilly) {
                    chilly.style.display = "none";
                    happyhand.style.display = "block";
                }
            } else if (scene6current === 1) {
                const happyhand = document.getElementById("happyhand_s6");
                const chilly = document.getElementById("chilly");
                if (happyhand && chilly) {
                    chilly.style.display = "block";
                    happyhand.style.display = "none";
                }
            } else if (scene6current === 3) {
                const happyside = document.getElementById("happyside");
                const chilly = document.getElementById("chilly");
                if (happyside && chilly) {
                    chilly.style.display = "none";
                    happyside.style.display = "block";
                }
            } else if (scene6current === 4) {
                const helthch_1 = document.getElementById("helthch_1");
                const phonech_1 = document.getElementById("phonech_1");
                if (phonech_1 && helthch_1) {
                    helthch_1.style.display = "block";
                    phonech_1.style.display = "none";
                }
            }
        }
        else if (currentSceneKey === "scene7") {
            if (scene7current === 0) {
                const chilly_1 = document.getElementById("chilly_1");
                const backher = document.getElementById("backher");
                const backhim = document.getElementById("backhim");
                if (chilly_1 && backher && backhim) {
                    chilly_1.style.display = "block";
                    chilly_1.style.left = "30%";
                    backher.style.display = "none";
                    backhim.style.display = "none";
                }
            } else if (scene7current === 1) {
                const chilly_1 = document.getElementById("chilly_1");
                const backher = document.getElementById("backher");
                const backhim = document.getElementById("backhim");
                if (chilly_1 && backher && backhim) {
                    chilly_1.style.display = "none";
                    backher.style.display = "block";
                    backhim.style.display = "block";
                }
            }
        }
        else if (currentSceneKey === "scene10") {
            if (scene10current === 0) {
                const chilly_2 = document.getElementById("chilly_2");
                const nice = document.getElementById("nice");
                const hansomech = document.getElementById("hansomech");
                if (chilly_2 && nice && hansomech) {
                    chilly_2.style.display = "block";
                    chilly_2.style.left = "30%";
                    nice.style.display = "none";
                    hansomech.style.display = "none";
                }
            }
        }
        else if (currentSceneKey === "scene11") {
            if (scene11current === 2) {
                const happyside_1 = document.getElementById("happyside_1");
                const angry = document.getElementById("angry");
                const hansomech_1 = document.getElementById("hansomech_1");
                if (happyside_1 && angry && hansomech_1) {
                    happyside_1.style.display = "block";
                    happyside_1.style.transform = "scaleX(-1)";
                    happyside_1.style.right = "10%";
                    angry.style.display = "none";
                    hansomech_1.style.transform = "scaleX(-1)";
                }
            }
        }
        else if (currentSceneKey === "scene12") {
            if (scene12current === 0) {
                const dumdum = document.getElementById("dumdum");
                const hi = document.getElementById("hi");
                if (dumdum && hi) {
                    dumdum.style.display = "block";
                    hi.style.display = "none";
                }
            }
        }
        else if (currentSceneKey === "scene14") {
            if (scene14current === 0) {
                const pack = document.getElementById("pack");
                if (pack) {
                    pack.style.display = "block";
                }
            }
        }
        else if (currentSceneKey === "scene20") {
            if (scene20current === 0) {
                const car = document.getElementById("car");
                const chilly_3 = document.getElementById("chilly_3");
                if (chilly_3&&car) {
                    car.style.display = "none";
                    chilly_3.style.display = "block";
                }
            }
        }
        else if (currentSceneKey === "scene23") {
            if (scene23current === 0) {
                const sucsucsu = document.getElementById("sucsucsu");
                const donthappyside = document.getElementById("donthappyside");
                const happyside_2 = document.getElementById("happyside_2");
                if (sucsucsu&&donthappyside&&happyside_2) {
                    sucsucsu.style.display = "none";
                    happyside_2.style.display = "none";
                    donthappyside.style.display = "block";
                }
            }
        }
        else if (currentSceneKey === "scene29") {
            if (scene29current === 1) {
                const facker = document.getElementById("facker");
                const timohappy = document.getElementById("timohappy");
                if (facker&&timohappy) {
                    facker.style.display = "none";
                    timohappy.style.left = "30%";
                }
            }
        }
        else if (currentSceneKey === "scene31") {
            if (scene31current === 0) {
                const facker_1 = document.getElementById("facker_1");
                const timohappy = document.getElementById("timohappy_1");
                const timoher = document.getElementById("timoher");
                if (facker_1&&timohappy&&timoher) {
                    timohappy.style.display = "none";
                    timoher.style.display = "block";
                    facker_1.style.left = "50%";
                    timoher.style.left = "15%";
                }
            }
        }
        else if (currentSceneKey === "scene32") {
            if (scene32current === 1) {
                const cookfacker = document.getElementById("cookfacker");
                const cook = document.getElementById("cook");
                const nice_1 = document.getElementById("nice_1");
                const kithin = document.getElementById("kithin");
                if (cookfacker&&nice_1&&cook&&kithin) {
                    cookfacker.style.display = "none";
                    nice_1.style.display = "none";
                    kithin.style.display = "none";
                    cook.style.display = "block";
                }
            }
            else if (scene32current === 2) {
                const cook = document.getElementById("cook");
                const kithin = document.getElementById("kithin");
                if (kithin&&cook) {
                    kithin.style.display = "block";
                    cook.style.display = "none";
                }
            }
            else if (scene32current === 3) {
                const proipanfacker = document.getElementById("proipanfacker");
                if (proipanfacker) {
                    proipanfacker.style.display = "block";
                }
            }
            else if (scene32current === 4) {
                const cookfacker = document.getElementById("cookfacker");
                const proipanfacker = document.getElementById("proipanfacker");
                if (proipanfacker&&cookfacker) {
                    proipanfacker.style.display = "none";
                    cookfacker.style.display = "block";
                }
            }
            else if (scene32current === 5) {
                const cookfacker = document.getElementById("cookfacker");
                const chilly_4 = document.getElementById("chilly_4");
                if (chilly_4&&cookfacker) {
                    chilly_4.style.display = "block";
                    chilly_4.style.left = "30%";
                    cookfacker.style.display = "none";
                }
            }
        }
        else if (currentSceneKey === "scene36") {
            if (scene36current === 0) {
                const chbuojumteacher = document.getElementById("chbuojumteacher");
                if (chbuojumteacher) {
                    chbuojumteacher.style.display = "block";
                }
            }
            if (scene36current === 3) {
                const chbuojumteacher = document.getElementById("chbuojumteacher");
                if (chbuojumteacher) {
                    chbuojumteacher.style.display = "none";
                }
            }
        }
        else if (currentSceneKey === "scene51") {
            if (scene51current === 3) {
                const ganggu = document.getElementById("ganggu");
                if (ganggu) {
                    ganggu.style.display = "block";
                }
            }
        }
        else if (currentSceneKey === "scene42") {
            if (scene42current === 1) {
                const imsiwanfront = document.getElementById("imsiwanfront");
                const singimsiwan = document.getElementById("singimsiwan");
                const dumdum_1 = document.getElementById("dumdum_1");
                if (imsiwanfront&&singimsiwan&&dumdum_1) {
                    singimsiwan.style.display = "block";
                    imsiwanfront.style.display = "none";
                    dumdum_1.style.display = "none";
                }
            }
            if (scene42current === 2) {
                const imsiwanfront = document.getElementById("imsiwanfront");
                const singimsiwan = document.getElementById("singimsiwan");
                const dumdum_1 = document.getElementById("dumdum_1");
                if (imsiwanfront&&singimsiwan&&dumdum_1) {
                    imsiwanfront.style.display = "block";
                    singimsiwan.style.display = "none";
                    dumdum_1.style.display = "block";
                }
            }
            if (scene42current === 5) {
                const singdumdum = document.getElementById("singdumdum");
                const dumdum_1 = document.getElementById("dumdum_1");
                if (singdumdum&&dumdum_1) {
                    singdumdum.style.display = "block";
                    dumdum_1.style.display = "none";
                }
            }
            if (scene42current === 6) {
                const imsiwanfront = document.getElementById("imsiwanfront");
                const amazingimiswan = document.getElementById("amazingimsiwan");
                if (imsiwanfront&&amazingimiswan) {
                    amazingimiswan.style.display = "block";
                    imsiwanfront.style.display = "none";
                }
            }
            if (scene42current === 7) {
                const singdumdum = document.getElementById("singdumdum");
                const amazingimiswan = document.getElementById("amazingimsiwan");
                const chilly_5 = document.getElementById("chilly_5");
                if (singdumdum&&amazingimiswan&&chilly_5) {
                    chilly_5.style.display = "block";
                    amazingimiswan.style.display = "none";
                    singdumdum.style.display = "none";
                }
            }
        }
        else if (currentSceneKey === "scene46") {
            if (scene46current === 1) {
                const nice_2 = document.getElementById("nice_2");
                const amazingimsiwan_1 = document.getElementById("amazingimsiwan_1");
                const happyside_3 = document.getElementById("happyside_3");
                const hiimsiwan = document.getElementById("hiimsiwan");
                const necutsazin = document.getElementById("necutsazin");
                const necutsazinan = document.getElementById("necutsazinan");
                if (nice_2&&amazingimsiwan_1&&happyside_3&&hiimsiwan&&necutsazin&&necutsazinan) {
                    hiimsiwan.style.display = "block";
                    happyside_3.style.display = "block";
                    necutsazinan.style.display = "block";
                    amazingimsiwan_1.style.display = "none";
                    necutsazin.style.display = "none";
                    nice_2.style.display = "none";
                }
            }
            if (scene46current === 3) {
                const happyside_3 = document.getElementById("happyside_3");
                const hiimsiwan = document.getElementById("hiimsiwan");
                const harther = document.getElementById("harther");
                const vimsiwan = document.getElementById("vimsiwan");
                if (vimsiwan&&harther&&happyside_3&&hiimsiwan) {
                    vimsiwan.style.display = "block";
                    happyside_3.style.display = "none";
                    hiimsiwan.style.display = "none";
                    harther.style.display = "block";
                }
            }
            if (scene46current === 4) {
                const imsiwanfront_1 = document.getElementById("imsiwanfront_1");
                const happyside_3 = document.getElementById("happyside_3");
                const harther = document.getElementById("harther");
                const vimsiwan = document.getElementById("vimsiwan");
                if (harther&&happyside_3&&imsiwanfront_1&&vimsiwan) {
                    happyside_3.style.display = "block";
                    vimsiwan.style.display = "none";
                    harther.style.display = "none";
                    imsiwanfront_1.style.display = "block";
                }
            }
            if (scene46current === 6) {
                const imsiwanfront_1 = document.getElementById("imsiwanfront_1");
                const happyside_3 = document.getElementById("happyside_3");
                const donthappyside_1 = document.getElementById("donthappyside_1")
                if (happyside_3&&imsiwanfront_1&&donthappyside_1) {
                    happyside_3.style.display = "none";
                    donthappyside_1.style.display = "block";
                    imsiwanfront_1.style.display = "none";
                }
            }
        }
        if (currentSceneKey === "scene5"){
            scene5current++;
        }
        if (currentSceneKey === "scene6"){
            scene6current++;
        }
        if (currentSceneKey === "scene7"){
            scene7current++;
        }
        if (currentSceneKey === "scene10"){
            scene10current++;
        }
        if (currentSceneKey === "scene11"){
            scene11current++;
        }
        if (currentSceneKey === "scene12"){
            scene12current++;
        }
        if (currentSceneKey === "scene14"){
            scene14current++;
        }
        if (currentSceneKey === "scene20"){
            scene20current++;
        }
        if (currentSceneKey === "scene23"){
            scene23current++;
        }
        if (currentSceneKey === "scene29"){
            scene29current++;
        }
        if (currentSceneKey === "scene31"){
            scene31current++;
        }
        if (currentSceneKey === "scene32"){
            scene32current++;
        }
        if (currentSceneKey === "scene36"){
            scene36current++;
        }
        if (currentSceneKey === "scene42"){
            scene42current++;
        }
        if (currentSceneKey === "scene46"){
            scene46current++;
        }
        if (currentSceneKey === "scene51"){
            scene51current++;
        }
    }, 1500);
setTimeout(() => {
        currentTextIndex++;
        const nextStory = currentSceneData.stories[currentTextIndex];
        if (nextStory) {
            if (nextStory.speaker && currentNameElement) {
                currentNameElement.textContent = nextStory.speaker;
            }
            startTyping(nextStory.text, currentStoryOutputElement, handleStoryComplete);
        } else {
            const completedStory = currentSceneData.stories[currentTextIndex - 1];
            if (completedStory && completedStory.choices && completedStory.choices.length > 0) {
                currentStoryOutputElement.style.display = 'none';
                currentTextElement.style.display = 'none';
                if(currentNameElement){
                    currentNameElement.style.display = 'none';
                }
                if (currentThreechoiceElement) currentThreechoiceElement.style.display = 'block';
                [currentPlace1Container, currentPlace2Container, currentPlace3Container].forEach(container => {
                    if (container) container.style.display = 'flex';
                });
                [currentPlace1Button, currentPlace2Button, currentPlace3Button].forEach(button => {
                    if (button) button.style.display = 'flex';
                });
                completedStory.choices.forEach((choice, index) => {
                    let buttonToUse;
                    if (index === 0) {
                        buttonToUse = currentPlace1Button;
                    } else if (index === 1) {
                        buttonToUse = currentPlace2Button;
                    } else if (index === 2) {
                        buttonToUse = currentPlace3Button;
                    }
                    if (buttonToUse) {
                        let originalText = choice.text;
                        let nextScene = choice.nextScene;
                        let isLockedChoice = false;
                        if (originalText.includes("박건우 선생님과 게임연습을 마쳐야 잠금이 해제됩니다.")) {
                            isLockedChoice = true;
                            if (!quiztrue) {
                                buttonToUse.innerHTML = originalText;
                                buttonToUse.disabled = true;
                                buttonToUse.onclick = () => {
                                    audioClick.currentTime = 0;
                                    audioClick.play();
                                    alert("박건우 선생님과 게임 연습을 완료해야 합니다!");
                                };
                            } else {
                                buttonToUse.innerHTML = originalText.replace("(박건우 선생님과 게임연습을 마쳐야 잠금이 해제됩니다.)", ""); // 잠금 해제 문구 제거
                                buttonToUse.disabled = false;
                                buttonToUse.onclick = () => handleChoice(nextScene);
                            }
                        } else {
                            buttonToUse.innerHTML = originalText;
                            buttonToUse.disabled = false;
                            buttonToUse.onclick = () => handleChoice(nextScene);
                        }
                    }
                });
            } else {
                if (currentSceneData.nextScene === 'quizGame') {
                    initializeScene(17);
                } else if (currentSceneData.nextScene) {
                    initializeScene(currentSceneData.nextScene);
                } else {
                    console.log("모든 스토리 완료, 다음 씬 지정 안됨. 게임 종료 또는 다음 단계 없음.");
                    if (currentNameElement) currentNameElement.style.display = 'none';
                    if (currentTextElement) currentTextElement.style.display = 'none';
                    if (currentStoryOutputElement) currentStoryOutputElement.style.display = 'none';
                    if (currentThreechoiceElement) currentThreechoiceElement.style.display = 'none';
                    document.querySelectorAll('.choice1, .choice2, .choice3, .twochoice1, .twochoice2').forEach(el => el.style.display = 'none');
                }
            }
        }
    }, 1500);
}

function handleChoice(nextSceneNumber) {
    audioClick.currentTime = 0;
    audioClick.play();
    if (nextSceneNumber) {
        initializeScene(nextSceneNumber);
    } else {
        alert("아직 개발되지 않은 경로입니다!");
        console.log("선택지 다음 씬 없음 또는 미정. 게임 종료 또는 다음 단계 없음.");
    }
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
        audioClick.currentTime = 0;
        audioClick.play();
        initializeScene(2);
    });

    button.addEventListener('mouseenter', () => {
        audioHover.currentTime = 0;
        audioHover.play();
    });
});
document.addEventListener('DOMContentLoaded', () => {
    initializeScene(1);
}); 
const characters = [
    { name: "가렌", img: "garen.png" },
    { name: "리 신", img: "leesin.png" },
    { name: "애쉬", img: "ashe.png" },
    { name: "티모", img: "teemo.png" },
    { name: "럭스", img: "lux.png" },
    { name: "아리", img: "ahri.png" },
    { name: "야스오", img: "yasuo.png" },
    { name: "제드", img: "zed.png" },
    { name: "잭스", img: "jax.png" },
    { name: "이즈리얼", img: "ezreal.png" },
];

let quizSet = [];
let currentQuizIndex = 0;
let correctCount = 0;

function startQuizGame() {
    document.getElementById("quizBox").style.display = "block";
    document.getElementById("quizResult").style.display = "none";

    quizSet = characters.sort(() => 0.5 - Math.random()).slice(0, 5);
    currentQuizIndex = 0;
    correctCount = 0;
    loadQuiz();
}

function loadQuiz() {
    const quiz = quizSet[currentQuizIndex];
    document.getElementById("quizImage").src = quiz.img;
    document.getElementById("quizAnswerInput").value = "";
    document.getElementById("quizProgress").textContent = `남은 캐릭터: ${5 - currentQuizIndex} / 맞은 개수: ${correctCount}`;
}

function submitAnswer() {
    const input = document.getElementById("quizAnswerInput").value.trim();
    const answer = quizSet[currentQuizIndex].name;
    if (input.toLowerCase() === answer.toLowerCase()) {
        correctCount++;
    }
    currentQuizIndex++;
    if (currentQuizIndex >= 5) {
        finishQuiz();
    } else {
        loadQuiz();
    }
}

function finishQuiz() {
    document.getElementById("quizBox").style.display = "none";
    const resultBox = document.getElementById("quizResult");
    resultBox.style.display = "block";

    if (correctCount >= 3) {
        resultBox.innerHTML = '<div class="success">success</div>';
        quiztrue=true;
        setTimeout(() => {
            initializeScene(18);
        }, 2000);
    } else {
        resultBox.innerHTML = '<div class="fail">fail</div>';
        setTimeout(() => {
            initializeScene(17);
        }, 2000);
    }
}

addEventListener("DOMContentLoaded", (event) => { if(pianochim==1) initializeScene(40); window.localStorage.setItem('piano', 0); })