const toggle = (element,button,element2,button2,element3,button3) => {

$(button).on('click',() => {
$(element2).slideUp()
$(element3).slideUp()
$(button2).css('transform','none')
$(button3).css('transform','none')

$(element).slideToggle()
 
if ($(button).css('transform') === 'none') {
   $(button).css('transform','rotate(45deg)')
  }
 else {
   $(button).css('transform','none')

  }
})}

toggle('.question-answer-1','.toggler-1','.question-answer-2','.toggler-2','.question-answer-3','.toggler-3')
toggle('.question-answer-2','.toggler-2','.question-answer-1','.toggler-1','.question-answer-3','.toggler-3')
toggle('.question-answer-3','.toggler-3','.question-answer-2','.toggler-2','.question-answer-1','.toggler-1')
