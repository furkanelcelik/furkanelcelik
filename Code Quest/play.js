$(document).ready(function() {
    var correctCount = 0;
    var wrongCount = 0;
    var userAnswers = [];

    function updateResults() {
        $('#correct-count').text(correctCount);
        $('#wrong-count').text(wrongCount);
    }

    function loadQuestions() {
        $.ajax({
            url: 'data/questions.json', // JSON dosyasının doğru yolu
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                var quizContainer = $('#quiz-container');
                data.forEach(function(questionObj, index) {
                    var questionHtml = '<div class="question">';
                    questionHtml += '<p>' + questionObj.question + '</p>';
                    questionObj.options.forEach(function(option) {
                        questionHtml += '<button class="option-button" data-index="' + index + '" data-answer="' + option + '">' + option + '</button>';
                    });
                    questionHtml += '</div>';
                    quizContainer.append(questionHtml);
                });

                $('.option-button').on('click', function() {
                    var questionIndex = $(this).data('index');
                    var selectedAnswer = $(this).data('answer');

                    // Kullanıcının cevabını kaydet
                    userAnswers[questionIndex] = selectedAnswer;

                    // Aynı sorudaki diğer butonların seçili sınıfını kaldır
                    $('.option-button[data-index="' + questionIndex + '"]').removeClass('selected');

                    // Tıklanan butona seçili sınıfını ekle
                    $(this).addClass('selected');
                });
            },
            error: function() {
                alert('Sorular yüklenemedi.');
            }
        });
    }

    function showResults() {
        $.ajax({
            url: 'data/questions.json', // JSON dosyasının doğru yolu
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                correctCount = 0;
                wrongCount = 0;
                data.forEach(function(questionObj, index) {
                    
                    var ans = userAnswers[index];
                    
                    if(typeof ans == "number"){
                        ans = ans.toString();
                    }
                    console.log(typeof ans);
                    if (ans === questionObj.correctAnswer) {
                        correctCount++;
                    } else {
                        wrongCount++;
                    }
                });
                updateResults();
            },
            error: function() {
                alert('Sorular yüklenemedi.');
            }
        });
    }

    $('#show-results-button').on('click', showResults);

    loadQuestions();
});
