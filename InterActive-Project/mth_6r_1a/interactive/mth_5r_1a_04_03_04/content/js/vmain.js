new Vue({
  el: "#spaceTemplate",
  data: {
    posts: [
      {
        counterCorrect: 0,
        LOcorrectcounter: 0,
        BloomTargets: null,
        randomNumber: null,
        loTargets: null,
        numberOfquestion: 0,
        // ---------------------------------------------------------------
        id: "mth_5r_1a_04_03_04",
        subjectId: "",
        conceptId: "",
        unitId: "",
        lessonId: "",
        title: "",
        keywords: "",
        learningObjectives: "",
        bloomLevels: [],
        type: "",
        loDegree: null,
        UserDegree: 0,
        SubType: "input",
        startTime: "",
        endTime: "",
        // ---------------------------------------------------------------
        items: [
          {
            active: false,
            id: 1,
            numberOfquestion: 0,
            // ---------------------------------------------------------------
            numberOfTrial: 0,
            questionlevel: "",
            questionType: "text",
            answersType: "text",
            startTime: "",
            endTime: "",
            BloomLevel: 3,
            numOfAttempts: 0,
            typequestion: 1,
            // ---------------------------------------------------------------
            questionType: 1,
            label_up: [
              {
                type: 2,
                content: [
                  {
                    parag: "2 ، 3",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
            inner_table: [
              {
                type: 2,
                content: [
                  {
                    parag: "<span class='text'>مضاعفات العدد</span> 2: ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["0", "2", "4", "6"],
                        show: [""],
                        answers: [""],
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                content: [
                  {
                    parag: "<span class='text'>مضاعفات العدد</span> 3: ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["0", "3", "6", "9"],
                        show: [""],
                        answers: [""],
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 1,
                content: [
                  {
                    parag: "<span class='text'>( م. م. أ ):</span>",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["6"],
                        show: [""],
                        answers: [""],
                        dis_input: true,
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
            ],
            label_down: [
              {
                display: false,
                type: 1,
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
          },
          {
            active: false,
            id: 3,
            numberOfquestion: 0,
            // ---------------------------------------------------------------
            numberOfTrial: 0,
            questionlevel: "",
            questionType: "text",
            answersType: "text",
            startTime: "",
            endTime: "",
            BloomLevel: 3,
            numOfAttempts: 0,
            typequestion: 1,
            // ---------------------------------------------------------------
            questionType: 1,
            label_up: [
              {
                type: 2,
                content: [
                  {
                    parag: "6 ، 9",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
            inner_table: [
              {
                type: 2,
                content: [
                  {
                    parag: "<span class='text'>مضاعفات العدد</span> 6: ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["0", "6", "12", "18"],
                        show: [""],
                        answers: [""],
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                content: [
                  {
                    parag: "<span class='text'>مضاعفات العدد</span> 9: ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["0", "9", "18", "27"],
                        show: [""],
                        answers: [""],
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 1,
                content: [
                  {
                    parag: "<span class='text'>( م. م. أ ):</span> ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["18"],
                        show: [""],
                        answers: [""],
                        dis_input: true,
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
            ],
            label_down: [
              {
                display: false,
                type: 1,
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
          },
          {
            active: false,
            id: 5,
            numberOfquestion: 0,
            // ---------------------------------------------------------------
            numberOfTrial: 0,
            questionlevel: "",
            questionType: "text",
            answersType: "text",
            startTime: "",
            endTime: "",
            BloomLevel: 3,
            numOfAttempts: 0,
            typequestion: 1,
            // ---------------------------------------------------------------
            questionType: 1,
            label_up: [
              {
                type: 2,
                content: [
                  {
                    parag: "5 ، 10",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
            inner_table: [
              {
                type: 2,
                content: [
                  {
                    parag: "<span class='text'>مضاعفات العدد</span> 5: ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["0", "5", "10", "15"],
                        show: [""],
                        answers: [""],
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                content: [
                  {
                    parag: "<span class='text'>مضاعفات العدد</span> 10: ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["0", "10", "20", "30"],
                        show: [""],
                        answers: [""],
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 1,
                content: [
                  {
                    parag: "<span class='text'>( م. م. أ ):</span> ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["10"],
                        show: [""],
                        answers: [""],
                        dis_input: true,
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
            ],
            label_down: [
              {
                display: false,
                type: 1,
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
          },
          {
            active: false,
            id: 7,
            numberOfquestion: 0,
            // ---------------------------------------------------------------
            numberOfTrial: 0,
            questionlevel: "",
            questionType: "text",
            answersType: "text",
            startTime: "",
            endTime: "",
            BloomLevel: 3,
            numOfAttempts: 0,
            typequestion: 1,
            // ---------------------------------------------------------------
            questionType: 1,
            label_up: [
              {
                type: 2,
                content: [
                  {
                    parag: "6 ، 12",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
            inner_table: [
              {
                type: 2,
                content: [
                  {
                    parag: "<span class='text'>مضاعفات العدد</span> 6: ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      { valid: ["0", "6", "12"], show: [""], answers: [""] },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                content: [
                  {
                    parag: "<span class='text'>مضاعفات العدد</span> 12: ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      { valid: ["0", "12", "24"], show: [""], answers: [""] },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 1,
                content: [
                  {
                    parag: "<span class='text'>( م. م. أ ):</span> ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["12"],
                        show: [""],
                        answers: [""],
                        dis_input: true,
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
            ],
            label_down: [
              {
                display: false,
                type: 1,
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
          },
          {
            active: false,
            id: 7,
            numberOfquestion: 0,
            // ---------------------------------------------------------------
            numberOfTrial: 0,
            questionlevel: "",
            questionType: "text",
            answersType: "text",
            startTime: "",
            endTime: "",
            BloomLevel: 3,
            numOfAttempts: 0,
            typequestion: 1,
            // ---------------------------------------------------------------
            questionType: 1,
            label_up: [
              {
                type: 2,
                content: [
                  {
                    parag: "2 ، 4",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
            inner_table: [
              {
                type: 2,
                content: [
                  {
                    parag: "<span class='text'>مضاعفات العدد</span> 2: ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      { valid: ["0", "2", "4"], show: [""], answers: [""] },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                content: [
                  {
                    parag: "<span class='text'>مضاعفات العدد</span> 4: ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      { valid: ["0", "4", "8"], show: [""], answers: [""] },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 1,
                content: [
                  {
                    parag: "<span class='text'>( م. م. أ ):</span> ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "−",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["4"],
                        show: [""],
                        answers: [""],
                        dis_input: true,
                      },
                    ],
                    marker: "،",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
            ],
            label_down: [
              {
                display: false,
                type: 1,
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
          },

          {
            active: false,
            id: 4,
            numberOfquestion: 0,
            // ---------------------------------------------------------------
            numberOfTrial: 0,
            questionlevel: "",
            questionType: "text",
            answersType: "text",
            startTime: "",
            endTime: "",
            BloomLevel: 3,
            numOfAttempts: 0,
            typequestion: 1,
            // ---------------------------------------------------------------
            questionType: 2,
            label_up: [
              {
                type: 2,
                content: [
                  {
                    parag: "6 ، 10",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
            inner_table: [
              {
                type: 2,
                direction: "ltr",
                content: [
                  {
                    parag: "= 6",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: ["2", "3"], show: [""], answers: [""] }],
                    marker: "×",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                direction: "ltr",
                content: [
                  {
                    parag: "= 10 ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: ["2", "5"], show: [""], answers: [""] }],
                    marker: "×",
                    line: true,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                direction: "ltr",
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      { valid: ["2", "3", "5"], show: [""], answers: [""] },
                    ],
                    marker: "×",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "=",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    type: 1,
                    input: [{ valid: ["30"], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 1,
                direction: "rtl",
                content: [
                  {
                    parag: "<span class='text'>( م. م. أ ) =</span>",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,

                    input: [
                      {
                        valid: ["30"],
                        show: [""],
                        answers: [""],
                        dis_input: true,
                      },
                    ],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
            ],
            label_down: [
              {
                display: false,
                type: 1,
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
          },
          {
            active: false,
            id: 4,
            numberOfquestion: 0,
            // ---------------------------------------------------------------
            numberOfTrial: 0,
            questionlevel: "",
            questionType: "text",
            answersType: "text",
            startTime: "",
            endTime: "",
            BloomLevel: 3,
            numOfAttempts: 0,
            typequestion: 1,
            // ---------------------------------------------------------------
            questionType: 2,
            label_up: [
              {
                type: 2,
                content: [
                  {
                    parag: "9 ، 12",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
            inner_table: [
              {
                type: 2,
                direction: "ltr",
                content: [
                  {
                    parag: "= 9",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: ["3", "3"], show: [""], answers: [""] }],
                    marker: "×",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                direction: "ltr",
                content: [
                  {
                    parag: "= 12 ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      { valid: ["3", "2", "2"], show: [""], answers: [""] },
                    ],
                    marker: "×",
                    line: true,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                direction: "ltr",
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["3", "3", "2", "2"],
                        show: [""],
                        answers: [""],
                      },
                    ],
                    marker: "×",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "=",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    type: 1,
                    input: [{ valid: ["36"], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 1,
                direction: "rtl",
                content: [
                  {
                    parag: "<span class='text'>( م. م. أ ) =</span>",
                    Length: 0,
                    input: [
                      {
                        valid: [""],
                        show: [""],
                        answers: [""],
                        dis_input: true,
                      },
                    ],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["36"],
                        show: [""],
                        answers: [""],
                        dis_input: true,
                      },
                    ],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
            ],
            label_down: [
              {
                display: false,
                type: 1,
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
          },
          {
            active: false,
            id: 1,
            numberOfquestion: 0,
            // ---------------------------------------------------------------
            numberOfTrial: 0,
            questionlevel: "",
            questionType: "text",
            answersType: "text",
            startTime: "",
            endTime: "",
            BloomLevel: 3,
            numOfAttempts: 0,
            typequestion: 1,
            // ---------------------------------------------------------------
            questionType: 2,
            label_up: [
              {
                type: 2,
                content: [
                  {
                    parag: "8 ، 12",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
            inner_table: [
              {
                type: 2,
                direction: "ltr",
                content: [
                  {
                    parag: "= 8",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      { valid: ["2", "2", "2"], show: [""], answers: [""] },
                    ],
                    marker: "×",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                direction: "ltr",
                content: [
                  {
                    parag: "= 12 ",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      { valid: ["2", "2", "3"], show: [""], answers: [""] },
                    ],
                    marker: "×",
                    line: true,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 2,
                direction: "ltr",
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [
                      {
                        valid: ["2", "2", "2", "3"],
                        show: [""],
                        answers: [""],
                      },
                    ],
                    marker: "×",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "=",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    type: 1,
                    input: [{ valid: ["24"], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
              {
                type: 1,
                direction: "rtl",
                content: [
                  {
                    parag: "<span class='text'>( م. م. أ ) =</span>",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                  {
                    parag: "",
                    Length: 0,
                    type: 1,
                    input: [
                      {
                        valid: ["24"],
                        show: [""],
                        answers: [""],
                        dis_input: true,
                      },
                    ],
                    marker: "",
                    line: false,
                    upper: false,
                    outTable: false,
                  },
                ],
              },
            ],
            label_down: [
              {
                display: false,
                type: 1,
                content: [
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                  {
                    parag: "",
                    Length: 0,
                    input: [{ valid: [""], show: [""], answers: [""] }],
                    marker: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    startLo: true,
    music: true,
    counter: -1,
    setInterval: null,
    showNext: true,
    checkhand: true,
    answerhand: true,
    guideAnwser: true,
    nexthand: true,
    screenClick: (number = 0),
    Estimation: null,
    btNext: "",
    btCheck: "",
    btAnswer: "",
    location_value: "",
    loQuestion: 6,
    question: false,
    click: false,
    questionsNumber: -1,
    sound: new Audio(),
    bgAudio: new Audio(),
    clickBtn: new Audio(),
    wrongAnswer: new Audio(),
    rightAnswer: new Audio(),
    finish: 0,
    onplay: true,
    chackfoucs: "",
    dischack: "",
    answersplayer: [],
    shuffled: [],
    win: false,
    truecount: 0,
    evaluation: 0,
    spaceman: true,
    disinput: "",
    templet: "",
    bg: "",
    innerHeight: "",
    ininput: false,
    // --------------------------------------------------------
    isLoading: false,
    isSuccess: false,
    activityId: 0,
    dataLoaded: false,
    currentdate: "",
    date: null,
    // --------------------------------------------------------
  },

  created() {
    this.shuffle(this.posts[0].items);

    this.wrongAnswer.src = "./content/assets/audios/wronganswer.mp3";
    this.rightAnswer.src = "./content/assets/audios/rightanswer.mp3";
  },
  async mounted() {
    await this.getData();
    this.posts[0].numberOfquestion = this.loQuestion;
    finalResponse.submitData(JSON.stringify(this.posts), 1, 0);
  },
  methods: {
    getDate() {
      this.currentdate = new Date();
      return (
        this.currentdate.getDate() +
        "/" +
        (this.currentdate.getMonth() + 1) +
        "/" +
        this.currentdate.getFullYear() +
        " " +
        this.currentdate.getHours() +
        ":" +
        this.currentdate.getMinutes() +
        ":" +
        this.currentdate.getSeconds()
      );
    },
    getData: async function () {
      if (direction == "2") {
        await returnData.then((response) => {
          this.isSuccess = response.isSuccess;
          this.data = response.value;
          console.log(this.data);
          this.activityId = this.data.activityId;
          console.log(this.activityId);
          if (
            this.data.learningObjectAsJson != "" &&
            this.data.learningObjectAsJson != null
          ) {
            let jsonData = JSON.parse(this.data.learningObjectAsJson);
            this.posts[0] = jsonData;
          }
        });
      } else {
        if (runPage) {
          this.isSuccess = true;
        } else {
          await returnData.then((response) => {
            this.isSuccess = response.value;
          });
        }
      }

      this.posts.length != 0
        ? setTimeout(() => {
            this.isLoading = true;
            this.posts[0].LOcorrectcounter = 0;
          }, 1000)
        : (this.isLoading = false);
      checkQuestions() ? (this.loQuestion = this.posts[0].items.length) : "";
    },
    generateLo: function () {
      this.posts[0].items.forEach((elem, i) => {
        elem.label_up.forEach((elementup, i) => {
          elementup.content.forEach((element) => {
            element.input[0].answers = element.input[0].valid;
            element.input[1]
              ? (element.input[1].answers = element.input[1].valid)
              : "";
          });
        });
        elem.inner_table.forEach((elementtable, i) => {
          elementtable.content.forEach((element) => {
            element.input[0].answers = element.input[0].valid;
            element.input[1]
              ? (element.input[0].answers = element.input[0].valid)
              : "";
          });
        });
        elem.label_down.forEach((elementdown, i) => {
          elementdown.content.forEach((element) => {
            element.input[0].answers = element.input[0].valid;
            element.input[1]
              ? (element.input[0].answers = element.input[1].valid)
              : "";
          });
        });
      });

      this.checkhand = false;

      this.maxLength();

      this.posts[0].startTime = this.getDate();
      this.posts[0].items[0].startTime = this.posts[0].startTime;

      this.posts[0].btCheck = document.querySelectorAll(
        ".active .button_check"
      );
      this.posts[0].btAnswer = document.querySelectorAll(
        ".active .show_anwser"
      );
      this.btNext = document.querySelectorAll(".active .show_next");
      this.shuffle();
      this.nextQuestion();
    },
    shuffle(a = "") {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      this.shuffled = a.slice(0, this.loQuestion);
    },
    nextQuestion: function () {
      this.counter += 1;
      this.question = false;
      this.click = false;
      this.spaceman = true;
      this.truecount = 0;
      this.answersplayer = this.posts[0].items[this.counter];
      setTimeout(() => {
        this.sound.src =
          "./content/assets/audios/q/q" +
          this.posts[0].items[this.counter].id +
          ".mp3";
        this.sound.play();
      }, 1500);
      this.soundPlay();

      this.questionsNumber = this.posts[0].items.length;
      if (this.questionsNumber != this.counter) {
        this.posts[0].items.forEach((element) => {
          element.active = false;
        });
        this.posts[0].items[this.counter].active = true;
      }
      if (this.questionsNumber == this.counter + 1) {
        this.onplay = !this.onplay;
      }
      setTimeout(() => {
        this.helpHand = document.querySelectorAll(".help");
        this.helpHand.forEach((el) => {
          el.classList.remove("false");
        });
      }, 100);
      document.querySelectorAll("input").forEach((el) => {
        el.classList.remove("show");
      });
      // --------------------------------------------------------
      this.posts[0].endTime = this.getDate();
      this.posts[0].items[this.counter].endTime = this.posts[0].endTime;
      // --------------------------------------------------------
    },

    start: function () {
      if (direction == "2") {
        this.posts[0].title = this.data.title;
        this.activityId = this.data.activityId;
        this.posts[0].bloomLevels = this.data.bloomLevels;
        this.posts[0].learningObjectives = this.data.learningObjectives;
        this.posts[0].loDegree = this.data.loDegree;
        this.posts[0].keywords = this.data.keywords;
        this.posts[0].type = this.data.type;
        this.posts[0].unitId = this.data.unitId;
        console.log(this.data.loDegree);
      }
      this.startLo = !this.startLo;
      this.clickBtn.src = "./content/assets/audios/click_btn.mp3";
      this.clickBtn.play();
      this.bgAudio.src = "./content/assets/audios/music.mp3";
      this.muteMusic();
      this.generateLo();

      this.templet = document.getElementsByClassName("container-space active");
      this.bg = document.getElementsByClassName("bg");

      let count = 0;

      setTimeout(() => {
        this.helpHand = document.querySelectorAll(".help");
        this.helpHand.forEach((el) => {
          count++;
          if (count != 1) {
            el.classList.remove("help");
            el.classList.remove("help2");
          } else {
            el.classList.add("show");
          }
        });
      }, 10);
    },

    soundPlay: function () {
      this.sound.addEventListener("loadedmetadata", (event) => {
        this.sec = this.sound.duration + 10;
      });
      this.setInterval = setInterval(() => {
        this.screenClick += 1;
        if (this.screenClick == Math.floor(this.sec)) {
          setTimeout(() => {
            this.sound.play();
            this.screenClick = 0;
          }, 10);
        }
      }, 1000);
    },
    setclick: function () {
      this.sound.pause();
      this.sound.currentTime = 0;
      clearInterval(this.setInterval);
      this.screenClick = 0;
      if (this.click == false) {
        this.soundPlay();
      }
      if (location.hostname != "127.0.0.1") {
        document.querySelectorAll("input").forEach((el) => {
          el.setAttribute("tabindex", -1);
        });
      }
    },
    muteMusic: function () {
      this.music = !this.music;
      this.bgAudio.loop = true;
      this.bgAudio.paused ? this.bgAudio.play() : this.bgAudio.pause();
    },
    clearSpace: function (event) {
      event.target.value.indexOf(".") != -1
        ? (event.target.value = event.target.value.replaceAll(" ", ""))
        : false;
    },

    maxLength: function () {
      this.posts[0].items.forEach((elem, i) => {
        elem.label_up[0].content.forEach((element) => {
          let mLength = 0;
          if (element.parag == "") {
            this.numberOfquestion++;
            elem.numberOfquestion++;
          }
          element.input[0].valid.forEach((elem) => {
            if (mLength < elem.length) {
              mLength = elem.length;
              element.Length = mLength;
            }
          });
          element.input[1]?.valid.forEach((elem) => {
            if (mLength < elem.length) {
              mLength = elem.length;
              element.Length = mLength;
            }
          });
        });

        elem.inner_table.forEach((ele) => {
          ele.content.forEach((element) => {
            if (element.parag == "" && !element.line) {
              this.numberOfquestion++;
              elem.numberOfquestion++;
            }
            let tLength = 0;
            element.input[0].valid.forEach((elem) => {
              if (tLength < elem.length) {
                tLength = elem.length;
                element.Length = tLength;
              }
            });
            element.input[1]?.valid.forEach((elem) => {
              if (tLength < elem.length) {
                tLength = elem.length;
                element.Length = tLength;
              }
            });
          });
        });

        elem.label_down[0].content.forEach((element) => {
          if (element.parag == "") {
            this.numberOfquestion++;
            elem.numberOfquestion++;
          }
          let mLength = 0;
          element.input[0].valid.forEach((elem) => {
            if (mLength < elem.length) {
              mLength = elem.length;
              element.Length = mLength;
            }
          });
        });
      });
    },

    checkvalue: function (event, element) {
      this.index = event.target.getAttribute("index");

      let data_att = event.target.getAttribute("data-index");
      let data_i = event.target.getAttribute("data-i");
      let typeget = event.target.getAttribute("inputType");
      if (typeget == 1) {
        for (const el of element[this.location_value][data_i].content[data_att]
          .input[0].valid) {
          if (el === event.target.value.trim()) {
            event.target.classList.add("right");
            event.target.classList.remove("wrong");
            event.target.setAttribute("disabled", "");
            break;
          } else {
            event.target.classList.remove("right");
            event.target.classList.add("wrong");
          }
        }
      }

      if (typeget == 2) {
        for (const el of this.answersplayer[this.location_value][data_i]
          .content[data_att].input[0].answers) {
          if (el === event.target.value.trim()) {
            let arrayslice =
              this.answersplayer[this.location_value][data_i].content[
                data_att
              ].input[0].answers.slice();
            const arr = arrayslice;
            const fromIndex = arr.indexOf(event.target.value);
            const toIndex = event.target.getAttribute("index");
            const newarr = arr.splice(fromIndex, 1)[0];
            arr.splice(toIndex, 0, newarr);
            this.posts[0].items[this.counter][this.location_value][
              data_i
            ].content[data_att].input[0].answers = arr;
            let sp = this.answersplayer[this.location_value][data_i].content[
              data_att
            ].input[0].answers.indexOf(event.target.value);
            this.answersplayer[this.location_value][data_i].content[
              data_att
            ].input[0].answers.splice(sp, 1);
            event.target.classList.add("right");
            event.target.classList.remove("wrong");
            event.target.classList.remove("emptyinput");
            event.target.setAttribute("disabled", "");
            break;
          } else {
            event.target.classList.remove("right");
            event.target.classList.add("wrong");
          }
        }
      }

      this.dischack = document.querySelectorAll(".active .dis_input");
      let total_right = document.querySelectorAll(".active .right").length;

      if (this.dischack != 0) {
        let total_input =
          document.querySelectorAll(".active input").length -
          this.dischack.length;
        if (total_right == total_input) {
          this.dischack.forEach((el) => {
            el.classList.remove("dis_input");
            el.removeAttribute("disabled");
          });
        }
      }

      if (
        document.querySelectorAll(".active input").length ==
        document.querySelectorAll(".active .right").length
      ) {
        this.posts[0].btAnswer = document.querySelectorAll(
          ".active .show_anwser"
        );
        this.posts[0].btAnswer[0]?.classList.add("disable");
        this.checkhand = true;
      }

      this.wrongAnswer.pause();
      this.wrongAnswer.currentTime = 0;

      this.rightAnswer.pause();
      this.rightAnswer.currentTime = 0;

      if (event.target.value != "") {
        event.target.classList.contains("wrong")
          ? this.wrongAnswer.play()
          : this.rightAnswer.play();
      }

      this.finished();
    },

    foucs: function () {
      this.clickBtn.src = "./content/assets/audios/click_btn.mp3";
      this.clickBtn.play();

      this.ininput = true;

      this.location_value = event.target.getAttribute("location-value");
      event.target.classList.remove("false");
      event.target.classList.remove("true");
      this.helpHand = document.querySelectorAll(".help");
      this.helpHand.forEach((el) => {
        el.classList.remove("help");
        // el.classList.remove("help2");
      });
      const help2 = document.querySelectorAll(".active .help2.show");
      help2.forEach((ele, i) => {
        ele.classList.remove("help2");
      });
    },
    clicktemplet(event) {
      this.innerHeight = event.clientY;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        if (innerWidth > innerHeight && this.ininput) {
          if (this.innerHeight > innerHeight / 2) {
            this.templet[0].style.cssText = `padding-bottom: ${
              innerHeight / 30
            }vw`;
            this.templet[0].scrollTop = innerHeight / 30;
            this.templet[0]?.classList.add("userAgent");
          }
        }
      }
    },
    foucsOut: function (event) {
      let calcRight = 0;
      let calcinput = 0;
      this.ininput = false;
      this.chackfoucs = document.querySelectorAll(".active input");
      this.chackfoucs.forEach((el) => {
        el.length;
        calcinput++;
        if (el.value != "") {
          el.classList.contains("wrong") ? el.classList.add("false") : false;
          el.classList.contains("right")
            ? [el.classList.add("true"), calcRight++]
            : false;
        }
      });

      this.templet[0].style.cssText = "padding-bottom: 0vw ;";
      (this.bg[0].style.cssText = `padding-bottom:0vh`),
        this.templet[0]?.classList.remove("userAgent");
    },
    clicktemplet(event) {
      this.innerHeight = event.clientY;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        if (innerWidth > innerHeight && this.ininput) {
          if (this.innerHeight > innerHeight / 2) {
            this.templet[0].style.cssText = `padding-bottom: ${
              innerHeight / 30
            }vw`;
            this.templet[0].scrollTop = innerHeight / 30;
            this.templet[0]?.classList.add("userAgent");
          }
        }
      }
    },
    show_anwser: function (event) {
      this.clickBtn.src = "./content/assets/audios/click_btn.mp3";
      this.clickBtn.play();

      this.answerhand = false;
      this.nexthand = true;
      this.click = true;
      this.win = false;

      this.btCheck = document.querySelectorAll(".active .button_check");
      this.btAnswer = document.querySelectorAll(".active .show_anwser");
      this.btNext = document.querySelectorAll(".active .show_next");

      this.btAnswer[0]?.classList.remove("disable");
      this.btNext[0]?.classList.add("enable");
      this.btCheck[0]?.classList.add("disable");

      this.falseBox = document.querySelectorAll(".active .wrong");
      this.falseBox.forEach((el, inputindex) => {
        let typeget = el.getAttribute("inputType");
        el.classList.add("show"),
          (el.value = ""),
          el.setAttribute("readonly", "");
        if (typeget == 1) {
          this.posts[0].items.forEach((elem, i) => {
            if (elem.active) {
              elem.label_up.forEach((elementup, i) => {
                if (elementup.type == 1) {
                  elementup.content.forEach((element) => {
                    element.input[0].show = element.input[0].valid[0];
                  });
                }
              });
              elem.inner_table.forEach((elementtable, i) => {
                if (elementtable.type == 1) {
                  elementtable.content.forEach((element) => {
                    element.input[0].show = element.input[0].valid[0];
                  });
                }
              });
              elem.label_down.forEach((elementdown, i) => {
                if (elementdown.type == 1) {
                  elementdown.content.forEach((element) => {
                    element.input[0].show = element.input[0].valid[0];
                  });
                }
              });
            }
          });
        } else {
          this.posts[0].items.forEach((elem, i) => {
            if (elem.active) {
              document
                .querySelectorAll(".active .question")
                .forEach((elem, index) => {
                  elem.querySelectorAll(".emptyinput").forEach((eleme, i) => {
                    let type = eleme.getAttribute("inputType");
                    eleme.classList.remove("false");
                    let data_i = eleme.getAttribute("data-i");
                    let data_att = eleme.getAttribute("data-index");
                    let location_value = eleme.getAttribute("location-value");
                    if (
                      this.posts[0].items[this.counter][location_value][data_i]
                        .content[data_att].type != 1
                    ) {
                      eleme.value =
                        this.posts[0].items[this.counter][location_value][
                          data_i
                        ].content[data_att].input[0].answers[i];
                    } else {
                      eleme.value =
                        this.posts[0].items[this.counter][location_value][
                          data_i
                        ].content[data_att].input[0].answers[0];
                    }
                  });
                });
            }
          });
        }
      });
      const el = document.querySelectorAll(".active .help.show");
      el.forEach((ele, i) => {
        ele.classList.remove("help");
      });
      const help2 = document.querySelectorAll(".active .help2.show");
      help2.forEach((ele, i) => {
        ele.classList.remove("help2");
      });
      event.target.classList.add("disable");

      this.disinput = document.querySelectorAll(".active .right");
      this.disinput.forEach((ele) => {
        ele.setAttribute("readonly", "");
      });
    },
    checkanswer: function () {
      this.checkhand = false;
      this.posts[0].items.forEach((el) => {
        if (el.active) {
          el.LOcorrectcounter =
            document.querySelectorAll(".active .right").length;
        }
      });
      this.clickBtn.src = "./content/assets/audios/click_btn.mp3";
      this.clickBtn.play();
      this.rightBox = document.querySelectorAll(".active .right");
      this.rightBox.forEach((elem) => {
        elem.classList.remove("false");
        elem.classList.add("true");
        this.truecount = document.querySelectorAll(".active .right").length;
      });
      this.falseBox = document.querySelectorAll(".active .wrong");

      this.falseBox.forEach((elem) => {
        elem.classList.remove("true");
        elem.classList.add("false");
      });

      if (this.falseBox.length === 0) {
        this.question = true;
        this.posts[0].LOcorrectcounter++;
        this.click = true;
        this.finished();
        this.g_evaluation();
        // --------------------------------------------------------
        this.posts[0].endTime = this.getDate();
        this.posts[0].items[this.counter].endTime = this.posts[0].endTime;

        // --------------------------------------------------------
        console.log(this.activityId);
        console.log(this.posts[0]);

        direction != ""
          ? globalFunctions.UpdateStudentActivity(
              this.activityId,
              this.posts[0]
            )
          : "";
      }
      this.helpHand = document.querySelectorAll(".help");
      this.helpHand.forEach((el) => {
        el.classList.remove("help");
      });
    },
    home: function () {
      this.clickBtn.play();
      location.reload();
    },

    show_next: function () {
      this.g_evaluation();
      this.nexthand = false;
      this.question = true;
    },

    finished: function () {
      if (this.truecount == document.querySelectorAll(".active input").length) {
        this.win = true;
        this.evaluation++;
      } else {
        this.win = false;
      }
      console.log(
        this.posts[0].LOcorrectcounter + " " + this.posts[0].numberOfquestion
      );

      let result =
        (this.posts[0].LOcorrectcounter / this.posts[0].numberOfquestion) * 100;
      console.log(result);
      this.posts[0].counterCorrect =
        result == 0
          ? 0
          : result == 0
          ? 0
          : result <= 25
          ? 2.5
          : result <= 50
          ? 5
          : result <= 75
          ? 7.5
          : 10;
      finalResponse.submitData(
        JSON.stringify(this.posts[0]),
        (this.posts[0].counterCorrect * 4) / 10,
        this.posts[0].counterCorrect
      );
      console.log(this.posts[0].counterCorrect);
    },
    g_evaluation: function () {
      this.spaceman = false;
      this.finish = (this.evaluation * 100) / this.loQuestion;

      if (this.finish == 0) {
        this.Estimation = "ضعيف";
        progressbar.playSegments([0, 1], true);
      }
      if (this.finish >= 1 && this.finish <= 50) {
        this.Estimation = "ضعيف";
        progressbar.playSegments([0, 50], true);
      }
      if (this.finish >= 51 && this.finish <= 64) {
        this.Estimation = "مقبول";
        progressbar.playSegments([0, 69], true);
      }
      if (this.finish >= 65 && this.finish <= 84) {
        progressbar.playSegments([0, 84], true);
        this.Estimation = "جيد";
      }
      if (this.finish >= 85 && this.finish <= 100) {
        progressbar.playSegments([0, 101], true);
        this.Estimation = "يفوق التوقعات ";
      }
    },
  },
});
