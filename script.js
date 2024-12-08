'use strict'

$(document).ready(function () {
  $('.slider').not('.slick-initialized').slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    arrows: false, // 矢印非表示
    pauseOnHover: false, // 
  });
  
  $(".button-room").off("click").on("click", function (e) {
    e.preventDefault();
    $(this).next(".details-content").toggle();
  });


 
  $('.gotop a').click(function(event) {
         event.preventDefault();    
      $('html, body').animate({scrollTop: 0}, 800); // 0.8秒かけてトップに戻る }); 
    });


    // ハンバーガーメニューのボタン処理
    $('.toggle_btn').off('click');
    $('.toggle_btn').on('click', function () {
      $('#navArea').toggleClass('open');
    });
});


$(function() {
  $('.qa_q').click(function() {
    var $answer = $(this).next('.qa_a');
    
    if ($answer.is(':animated')) {
      return; 
    }

    $answer.stop(true, true).slideToggle();

    $(this).toggleClass("open");
  });
});



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calendar').addEventListener('change', function() {
    const selectedDate = this.value;
    document.getElementById('selected-date').innerText = `選択された日付 : ${selectedDate}`;

    const timetableData = [ 
      { room: '10F-C', capacity: '20名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '17F-A', capacity: '30名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '17F-B', capacity: '30名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '17F-C', capacity: '32名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '20F-A', capacity: '30名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '20F-B', capacity: '30名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '21F-A', capacity: '30名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '21F-B', capacity: '30名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '21F-C', capacity: '30名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},

      { room: '7F-A', capacity: '30名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '7F-B', capacity: '20名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '7F-C', capacity: '28名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
      { room: '7F-D', capacity: '30名', slots: ['', '', '', '', '', '', '', '', '', '', '', '']},
    ];

      const tbody = document.querySelector('#timetable tbody');
      tbody.innerHTML = '';

      timetableData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.room}</td>
          <td>${item.capacity}</td>
          ${item.slots.map(slot => `<td>${slot}</td>`).join('')}
        `;
        tbody.appendChild(row);
      });
  });
});


