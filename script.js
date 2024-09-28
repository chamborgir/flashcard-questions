const questions = [
  "What's a memory of us that you replay in your head when you're having a bad day?",
  "What's the most meaningful thing you've learned from being with me?",
  "When did you first realize you were in love with me?",
  "What’s a special tradition we’ve created that means a lot to you?",
  "What’s a mistake you’ve made in our relationship that you wish you could take back?",
  "Which of my words or actions has stayed with you in a meaningful way?",
  "When do you feel most connected to me, and what are we doing at that time?",
  "What's one thing you secretly wish I did more often when we're together?",
  "What’s your favorite memory of us during a simple everyday moment?",
  "Have you ever doubted our relationship, and if so, what caused it?",
  "Are there any habits or traits of mine that annoy you, and why?",
  "How do you feel about the way we handle conflicts, and what could we improve?",
  "Have you ever felt unappreciated or taken for granted by me?",
  "Is there a secret you’ve kept from me that you feel I should know?",
  "What’s a recurring issue in our relationship that you think we’ve avoided discussing?",
  "What would you change about our relationship if you could?",
  "What’s a time when you felt unsupported by me?",
  "Are there aspects of my personality that you find difficult to handle?",
  "If you had to choose between a romantic dinner or a night of passion, what would you pick?",
  "What’s something you’ve fantasized about that you’d like to try together?",
  "How do you feel about physical affection when we’re out in public?",
  "What’s a romantic gesture that would mean a lot to you?",
  "How do you feel most loved and appreciated by me?",
  "If we had a huge fight, what's the one thing you know would pull us back together?",
  "If someone told you that you're a lot like me, would you take that as a compliment?",
  "Is there a question you wish I would ask you but I haven't?",
];

const cardInner = document.getElementById("card-inner");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

nextButton.addEventListener("click", () => {
  // Trigger the card flip by toggling the 'flip' class
  cardInner.parentElement.classList.toggle("flip");

  // Delay for the flipping animation before changing the question text
  setTimeout(() => {
    const randomIndex1 = Math.floor(Math.random() * questions.length);
    const randomIndex2 = Math.floor(Math.random() * questions.length);

    // Front of the card shows one random question
    questionElement.textContent = questions[randomIndex1];

    // Back of the card shows another random question
    answerElement.textContent = questions[randomIndex2];
  }, 300); // Sync with the 0.6s flip animation
});
