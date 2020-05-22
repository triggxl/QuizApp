/*used to store data within app*/

const STORE = {
  questions: [
    {
      question: "A zoonotic disease is one that:",
      answers: [
        "Can be treated by a trained veterinarian",
        "Requires animal products to eradicate",
        "Can be transmitted from animals to humans",
        "Threatens to wipe out a species",
      ],
      correctAnswer: "Can be transmitted from animals to humans", //rationale
    },
    {
      question: "Orthostatic hypotension is:",
      answers: [
        "A raised heart rate due to chronic stress",
        "Light-headedness caused by a lack of sodium",
        "Lowered blood pressure caused by standing up",
        "Poor circulation in the hands and feet",
      ],
      correctAnswer: "Lowered blood pressure caused by standing up", //rationale transitions in 'dissolves into focus'
    },
    // {
    //   question: 'Your doctor diagnoses you with Bromodosis after a recent doctor\'s visit, what do you have?',
    //   answers: [
    //     'Food poisoning',
    //     'A caffeine high',
    //     'Stinky feet',
    //     'A fasting regimen'
    //   ],
    //   correctAnswer:
    //     'Lowered blood pressure caused by standing up', //rationale
    // },
    // {
    //   question: 'What can be described by the condition hyperlordosis?',
    //   answers: [
    //     'An over-sensitivity to bright light',
    //     'Over-exercising',
    //     'A sudden personality change',
    //     'An exaggerated curve in the lower back'
    //   ],
    //   correctAnswer:
    //     'An exaggerated curve in the lower back' //rationale
    // },
    // //have an alert message hover under with an explanation to each answer
    // {
    //   question: 'What does the term black carbon refer to?',
    //   answers: [
    //     'An air pollutant emitted by vehicles',
    //     'A toxin found in diseased potatoes',
    //     'A noxious fume produced by malfunctioning home-heating systems',
    //     'A suspected carcinogenic component of mobile phones'
    //   ],
    //   correctAnswer:
    //     'An air pollutant emitted by vehicles' //rationale
    // },
    // {
    //   question: 'What are idiopathies?',
    //   answers: [
    //     'A family of mental disorders marked by an unremitting obsession with privacy',
    //     'Conditions that eventually lead to cognitive decline',
    //     'Diseases of unknown origins',
    //     'A series of opportunistic bacterial infections'
    //   ],
    //   correctAnswer:
    //     'Diseases of unknown origins' //rationale
    // },
    // {
    //   question: 'The “recovery position” is the recommended posture for which of the following?',
    //   answers: [
    //     'Placing someone who is unconscious but breathing',
    //     'Healing from surgery',
    //     'Slowing one’s heart rate after exercise',
    //     'Sitting with an injured ankle'
    //   ],
    //   correctAnswer:
    //     'Placing someone who is unconscious but breathing' //rationale
    // },
    // {
    //   question: '*Bonus Question*: Any guess on what Brassica oleracea is? (You may be surpised of the answer)',
    //   answers: [
    //     'Hair-growth disorder',
    //     'Shoulder bone that is prone to fractures',
    //     'A gene associated with memory function',
    //     'Vegetable species'
    //   ],
    //   correctAnswer:
    //     'Vegetable species' //rationale
    // }
  ],
};

//Source: https://www.readersdigest.ca/health/healthy-living/medical-trivia/
