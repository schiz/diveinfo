$(document).ready(function(){

$('.btn-all').css('background-position','0px -783px');

$("#regform").validate({
	        
	       rules:{ 
	        
	            name:{
	                required: true,
	                minlength: 2,
	                maxlength: 25,
	            },
	            
	            surname:{
	                required: true,
	                minlength: 2,
	                maxlength: 25,
	            },
	           	email:{
	           		required: true,
	                email : true,
	                minlength: 6,
	                maxlength: 35,
	            },
	            pswd:{
	                required: true,
	                minlength: 6,
	                maxlength: 16,
	            },
	            pswdrepeat:{
	                required: true,
	                minlength: 6,
	                maxlength: 16,
	            },
	           date:{
	                required: true,
	                minlength: 6,
	                maxlength: 16,
	            },
	            group1:{
	                required: true,
	                minlength: 6,
	                maxlength: 16,
	            },

	       },
	       
	       messages:{
	        
	            name:{
	                required: "Это поле обязательно для заполнения",
	                minlength: "Имя должно состоять минимум из 2 символов",
	                maxlength: "Максимальное число символов - 25",
	            },
	            
	            surname:{
	                required: "Это поле обязательно для заполнения",
	                minlength: "Минимум 2 символа",
	                maxlength: "Максимальное число символов - 25",
	            },
	            email:{
	            	required: "Это поле обязательно для заполнения",
	                email : "Вы неправильно ввели e-mail",
	                required: "Это поле обязательно для заполнения",
	                maxlength: "Максимальное число символов - 35",
	            },
	            
	            pswd:{
	                required: "Это поле обязательно для заполнения",
	                minlength: "Минимум 6 символов",
	                maxlength: "Максимальное число символов - 16",
	            },
	            pswdrepeat:{
	                required: "Это поле обязательно для заполнения",
	                minlength: "Минимум 6 символов",
	                maxlength: "Максимальное число символов - 16",
	            },
	            date:{
	                required: "Это поле обязательно для заполнения",
	                minlength: "Минимум 6 символов",
	                maxlength: "Максимальное число символов - 16",
	            },
	        	group1:{
	                required: "Это поле обязательно для заполнения",
	                minlength: "Минимум 6 символов",
	                maxlength: "Максимальное число символов - 16",
	            },
	       }
	        
	    });

    $("#loginform").validate({
        
       rules:{ 
        
            login:{
                required: true,
                minlength: 4,
                maxlength: 25,
            },
            
            pswd:{
                required: true,
                minlength: 6,
                maxlength: 16,
            },
       },
       
       messages:{
        
            login:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },
            
            pswd:{
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символа",
                maxlength: "Максимальное число символо - 16",
            },
        
       }
        
    });

    	//Валидация radiobutton

    $('.btn-registration').bind('click', function() {

		 if($('.reg-label input[type="radio"]').is(':checked') == false){

		       $('label[for="choose1"],label[for="choose2"]').css('color','red');
		       $('label[for="choose2"]').parent().after('<span for="choose" class="error" >Это поле обязательно для заполнения</span>');
		       $('label[for="choose2"]').parent().css('height','50px');
		       $('span[for="choose"]:not(:first)').hide();
		 }

		 else {
		 		$('label[for="choose1"],label[for="choose2"]').css('color','#3C3C3C');
		 		$('label[for="choose2"]').parent().css('height','0px');
		 		$('span[for="choose').css('display','none');
		 	};

    });


	//Допустимое кол-во символов
	$("input[name='login']").attr("maxlength", 25);
	$("input[name='name']").attr("maxlength", 25);
	$("input[name='surname']").attr("maxlength", 25);
	$("input[name='pswd']").attr("maxlength", 16);
	$("input[name='pswdrepeat']").attr("maxlength", 16);
    $("input[name='email']").attr("maxlength", 35);


    $("#calendarTours,#reg-birthdate,#fw-calendar").mask("99/99/9999");

	$('._scroller').on('click', function() {
			scrollerHeight();
	});



}); //end of ready


$(window).load(function() {
	//отправка данных из формы авторизации
	$('#loginform .btn-enter').click(function() {
	   var $this = $(this);
	   $.post('url', {'login': 'something', 'pswd': 'bar'}, function() {
	       window.location = $this.attr('href');
	   });

	   var params = $('#loginform').serializeObject();

		   	$.each(params, function(index, value) {

			});



		$.ajax({

		  success: function(data) {

		  },

		  error:  function(data){

		  		$('.login-block').fadeOut(100);
		  		$('.md-modal').fadeOut(100);
		  		$('.login-block.authorized').fadeIn(100);
		  }

		});

	});

	$('#regform .btn-registration').bind('click', function() {
	   var $this = $(this);
	   $.post('url', {'name': 'something', 'surname': 'bar'}, function() {
	       window.location = $this.attr('href');
	   });
	   params = $('#regform').serializeObject();
	   console.log(params);

	   pass1=$('#reg-password').val();
	   pass2=$('.reg-confirm-pass').val();
	  

		$.ajax({

		  success: function(data) {

		  },

		  error:  function(data){

		  		$('.login-block').fadeOut(100);
		  		$('.md-modal').fadeOut(100);
		  		$('.login-block.authorized').fadeIn(100);
		  },


		});

	});

	$.fn.serializeObject = function()
	{
	   var o = {};
	   var a = this.serializeArray();
	   $.each(a, function() {
	       if (o[this.name]) {
	           if (!o[this.name].push) {
	               o[this.name] = [o[this.name]];
	           }
	           o[this.name].push(this.value || '');
	       } else {
	           o[this.name] = this.value || '';
	       }
	   });
	   return o;
	};


}); //end of ready


window.FW = function(){

	window.FW.Elements = {
		Instances: {},
		Dropdowns: {},
		Tabs: {},
		Sorting: {}
	};

	//Дропдауны
	window.FW.Elements.Dropdowns = function(){
		
		var self = this,
			dropdowns;
			
		this.listsWidth = [];
			

		function initialize() {			
			$(window).on('load',function(){
				dropdowns = $('.fw-dropdown');
				prepare();
			})

			//setClick();
		}

		function prepare() {
			var textLabel;
			//проверка есть ли элементы списка и установка дефолтоного состояние				


			$.each(dropdowns, function(i,item){
				var dropdown = $(this),
					list = dropdown.find('ul');

				
				//calculateListWidth(dropdowns)

				//ширина списка


			 				
				if ( (dropdown.outerWidth() - 4) > 70) {
					
					self.listsWidth.push(dropdown.outerWidth() - 4)
					list.width(dropdown.outerWidth() - 4)

					
				}


				// добавление span для текста
				$(this).append($('<span/>').addClass('textLabel'));
				textLabel = dropdown.find('> span.textLabel');


				if (dropdowns.find('ul').length !== 0) {						
					textLabel.append (
						dropdown.data('label')
					);
				} //todo else add ul li 'not set'
			})



			$('.fw-tab-block').on('click.FW','.fw-dropdown',function(e){
				var dropdown = $(e.currentTarget),	
					list = dropdown.find('ul'),					
					page = $('body,html');
			})


			// обработка зыкрытия (дополнительная)


			$('.dropdown').bind('click', function() {

				if($(this).hasClass('_opened')){
					$(this).removeClass('_opened');
					$(this).addClass('_opened1');
				}
				else if($(this).hasClass('_opened1')){
					$(this).addClass('_opened');
					$(this).removeClass('_opened1');
				}
				else{
					$(this).addClass('_opened');
				}

				$('.dropdown').not(this).removeClass('_opened');

			        $("html").bind("click", function (evt) { // ,биндишь хтмл на клик
			            //код далее срабатывает если нажать на любой элемент страницы
			            var target = $(evt.target); //определяем объект страницы на который мы нажали
			            if (target.hasClass("_opened") || target.hasClass("textLabel")) { // смотрим является ли элемент нашим меню.Класс лучше чтобы был уникальный.
			                return;// если элемент на который мы нажали - выходим из кода и ничего не делаем.
			            }
			            else {
			                // если же элемент не является меню - а является любым другим объектом страницы
			                // код закрытия меню
			                $('.dropdown').removeClass('_opened');
			            }
			        });

			});


			//попап для карты
			 $(".googleMap iframe").mouseenter(function(){
			 		$('.mapPoint').show();
			    });
			 $(".mapSearch").mouseenter(function(){
			 		$('.mapPoint').hide();
			    });


			//клик по табам поиска
			$('.first-tab').on('click', function() {

				$(".searchTabs").css('display','none');
				$('.searchDiveClub').css('display','block');
				


			});
			$('.second-tab').on('click', function() {

				$('.searchTabs').css('display','none');
				$('.searchTour').css('display','block');	

			});
			$('.third-tab').on('click', function() {

				$('.searchTabs').css('display','none');	

			});
			$('.fourth-tab').on('click', function() {

				$(".searchTabs").css('display','none');
				$('.searchJob').css('display','block');


			});

			$('.five-tab').on('click', function() {

				$(".searchTabs").css('display','none');
				$('.searchDiver').css('display','block');

			});

			$('.last-tab').on('click', function() {

				$(".searchTabs").css('display','none');


			});
	

			//клик по элементам списка
			$('.fw-tab-block,.mapSearch').on('click.FW','.fw-dropdown > ul > li',function(event){				
				var current = $(event.currentTarget),
					text = current.text(),
					dropdown = current.parents('.fw-dropdown');					
				
				dropdown.attr('data-label', text);				
				dropdown.find('.textLabel').text(text);

					
				event.stopPropagation()
			})
		}

		//Maps скрыть(показать)

		$('.unvisible').hide(); // изначально скрываем 
		$('.showResults p').on('click', function () {

			$(this).parents('.showResults').find('.unvisible').toggle(100);

			text = $(this).text();
			if(text == 'Скрыть'){
				$(this).text('Развернуть');
			}
			else $(this).text('Скрыть');
					
		});

		$('.backToUserPage').on('click', function () {

			$('.showResults').nextUntil(".mapsClubList").hide();
			$('.mapsClubList').show();

		});

		//календарь

		$.datepicker.regional['ru'] = { 
		closeText: 'Закрыть', 
		prevText: '&#x3c;Пред', 
		nextText: 'След&#x3e;', 
		currentText: 'Сегодня', 
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
		'Июл','Авг','Сен','Окт','Ноя','Дек'], 
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
		dayNamesMin: ['В','П','В','С','Ч','П','С'], 
		dateFormat: 'dd/mm/yy', 
		firstDay: 1, 
		isRTL: false 
		}; 
		$.datepicker.setDefaults($.datepicker.regional['ru']); 

		$('#calendarTours').datepicker({buttonImage:"../temp/framework/images/calendar.png", showOn: 'both'});
		$( "#reg-birthdate" ).datepicker({buttonImage:"../temp/framework/images/calendar.png",  showOn: 'both'});
		$('#fw-calendar').datepicker();
		$('.unvisible input[type="text"]').datepicker({ dateFormat: 'dd.mm.yy',buttonImage:"../temp/framework/images/calendar.png",  showOn: 'both'});


		//клик по элементам списка Публикации


		//выбор языка

		$('.changeLang figure').on('click', function() {

			var flag1 = $(this).parent().html();

			var flag2 = $('.changeLang aside').html();

			$('.changeLang aside').html(flag1);

			$(this).html(flag2);

		});


		//актив для списка
		$('.fw-sortBlock a').on('click', function() {

			$(this).parents('.fw-sortBlock').find('a').removeClass('active-link');
			$(this).addClass('active-link');

		});
		//актив для меню новостей
		$('.newsNav li').on('click', function() {

			$('.newsNav li').removeClass('active');
			$(this).addClass('active');

		});

		//актив для навигации Maps
		$('.googleMap table span').on('click', function() {

			$('.googleMap table span').removeClass('active');
			$(this).addClass('active');

		});
	    //Переключение контента Maps
		$('.map-first-tab').on('click', function() {
			$('.mapSearch').css('display','none');
			$('.mapSearch').eq(0).css('display','block');
		});
		$('.map-second-tab').on('click', function() {
			$('.mapSearch').css('display','none');
			$('.mapSearch').eq(1).css('display','block');
		});
		$('.map-third-tab').on('click', function() {
			$('.mapSearch').css('display','none');
			$('.mapSearch').eq(2).css('display','block');
		});




		//Кнопка показать еще
		$('.additionally a').on('click', function() {

			$('.fm-photoPostNewRaport .unvisible').removeClass('unvisible');

		});

		$('.show-all').on('click', function() {

			$(this).parents('.news,.friends').find('.unvisible').removeClass('unvisible');
			$(this).fadeOut(250);

		});

		//Вход-регистрация
		$('.enter h2,.login').on('click', function() {
			$('.registration').css('display','none');
			$('.enter').css('display','block');

			$('.enter h2').addClass('reg-active');
			$('.registration h3').removeClass('reg-active');
		});

		$('.enter h3,.register').on('click', function() {
			$('.registration').css('display','block');
			$('.enter').css('display','none');

			$('.enter h3').removeClass('reg-active');
			$('.registration h3').addClass('reg-active');
		});

		$('.registration h2').on('click', function() {
			$('.registration').css('display','none');
			$('.enter').css('display','block');

			$('.enter h2').addClass('reg-active');
			$('.registration h3').removeClass('reg-active');

		});

		$('.registration h3').on('click', function() {
			$('.registration').css('display','block');
			$('.enter').css('display','none');

			$('.enter h3').removeClass('reg-active');
			$('.registration h3').addClass('reg-active');
		});

		//скрыть-показать пароль
		$('.eye-icon').on('click', function() {
			attr1 = $('#reg-password').attr('type')

			if(attr1 == 'password'){
				$('#reg-password').attr('type', 'text');
				$('.eye-icon').css('background-position', '-217px -182px');
			}
			else {
				$('#reg-password').attr('type', 'password');
				$('.eye-icon').css('background-position', '-217px -145px');
			}

		});



		$(".containerClubs h3 a").hover(
			function () {

					$('#club-description').css('display', 'block');
			},
			function () {
					$('#club-description').css('display', 'block');

			}	
		);
		$('#close-description').on('click', function() {

			$('#club-description').fadeOut(400);

		});

			//Вакансии-резюме
		$('.vacancy-header small').on('click', function() {

			$('.resume').css('display','none');
			$('.vacancy').css('display','block').fadeOut(0).fadeIn(400);

			$('.vacancy-header small').addClass('reg-active');
			$('.vacancy-header small').removeClass('reg-deactive');
			$('.vacancy-header font').removeClass('reg-active');
			$('.vacancy-header font').addClass('reg-deactive');
		});

		$('.vacancy-header font').on('click', function() {

			$('.vacancy').css('display','none');
			$('.resume').css('display','block').fadeOut(0).fadeIn(400);

			$('.vacancy-header font').addClass('reg-active');
			$('.vacancy-header font').removeClass('reg-deactive');
			$('.vacancy-header small').addClass('reg-deactive');
			$('.vacancy-header small').removeClass('reg-active');
		});

		//Инструкторвы-дайвклубы

		$('.instructors-header small').on('click', function() {

			$('.case-2').css('display','none');
			$('.case-1').css('display','block').fadeOut(0).fadeIn(400);

			$('.instructors-header small').addClass('reg-active');
			$('.instructors-header small').removeClass('reg-deactive');
			$('.instructors-header font').removeClass('reg-active');
			$('.instructors-header font').addClass('reg-deactive');
		});

		$('.instructors-header font').on('click', function() {

			$('.case-1').css('display','none');
			$('.case-2').css('display','block').fadeOut(0).fadeIn(400);

			$('.instructors-header font').addClass('reg-active');
			$('.instructors-header font').removeClass('reg-deactive');
			$('.instructors-header small').addClass('reg-deactive');
			$('.instructors-header small').removeClass('reg-active');
		});


		// ПОИСК ВАКАНСИЙ НАЙТИ СОТРУДНИКА

		$('.instructors-header small').on('click', function() {

			$('.case-2').css('display','none');
			$('.case-1').css('display','block').fadeOut(0).fadeIn(400);

			$('.instructors-header small').addClass('reg-active');
			$('.instructors-header small').removeClass('reg-deactive');
			$('.instructors-header font').removeClass('reg-active');
			$('.instructors-header font').addClass('reg-deactive');
		});

		//Меню клубов

		$('.diveclub h2').on('click', function() {

			$('.searchJob .diveclub:last').css('display','none');

			$('.searchJob .diveclub:first').css('display','block');

		});
		$('.diveclub a').on('click', function() {

			$('.searchJob .diveclub:first').css('display','none');
			$('.searchJob .diveclub:last').css('display','block');

		});


		$('.divePageMenu td').on('click', function() {

			$('.divePageMenu td').removeClass('active');
			$(this).addClass('active');

		});

		$('.clubTours-tab').on('click', function() {
			
			$(".divePageMenu").nextUntil(".right").css('display','none');
			$('.content-section').css('display','block');

		});

		$('.testimonials-tab').on('click', function() {
			
			$(".divePageMenu").nextUntil(".right").css('display','none');
			$('.testimonials').css('display','block');

		});

		$('.divingWithUs-tab').on('click', function() {
			
			$(".divePageMenu").nextUntil(".right").css('display','none');
			$('.divingWithUs').css('display','block');

		});

		$('.vacancy-tab').on('click', function() {
			
			$(".divePageMenu").nextUntil(".right").css('display','none');
			$('.vacancy').css('display','block');

		});

		$('.partners-tab').on('click', function() {
			
			$(".divePageMenu").nextUntil(".right").css('display','none');
			$('.divingClubs').css('display','block');
			$('.divingWithUs').css('display','none');

		});

		//Меню dive davers

		$('.btn-all').on('click', function() {

			$(this).css('background-position','0px -783px');
			$('.btn-divers').css('background-position','-62px -693px');
			$('.btn-instructors').css('background-position','-190px -693px');
			$('.btn-geeks').css('background-position','-347px -693px');

		});

		$(".btn-all").hover(
			function () {

				var bgPos = $('.btn-all').css('background-position');

				if(!bgPos == '0px -783px'){
					$(this).css('background-position','0px -738px');
				}
				else if(bgPos == '0px -693px'){
					$(this).css('background-position','0px -738px');
				}
			},
			function () {
				
				var bgPos = $('.btn-all').css('background-position');

				if(bgPos == '0px -738px'){
					$(this).css('background-position','0px -693px');
				}
			}	
		);

		$('.btn-divers').on('click', function() {

			$(this).css('background-position','-62px -783px');
			$('.btn-instructors').css('background-position','-190px -693px');
			$('.btn-geeks').css('background-position','-347px -693px');
			$('.btn-all').css('background-position','0px -693px');

		});

		$(".btn-divers").hover(
			function () {

				var bgPos = $('.btn-divers').css('background-position');

				if(!bgPos == '-62px -783px'){
				$(this).css('background-position','-62px -738px');
				}
				else if(bgPos == '-62px -693px'){
					$(this).css('background-position','-62px -738px');
				}
			},
			function () {
				
				var bgPos = $('.btn-divers').css('background-position');

				if(bgPos == '-62px -738px'){
					$(this).css('background-position','-62px -693px');
				}
			}	
		);

		$('.btn-instructors').on('click', function() {

			$(this).css('background-position','-190px -783px');
			$('.btn-divers').css('background-position','-62px -693px');
			$('.btn-geeks').css('background-position','-347px -693px');
			$('.btn-all').css('background-position','0px -693px');

		});

		$(".btn-instructors").hover(
			function () {

				var bgPos1 = $('.btn-instructors').css('background-position');
				console.log(bgPos1);
				if(!bgPos1 == '-190px -783px'){
				$(this).css('background-position','-190px -738px');
				}
				else if(bgPos1 == '-190px -693px'){
					$(this).css('background-position','-190px -738px');
				}
			},
			function () {
				
				var bgPos1 = $('.btn-instructors').css('background-position');
				console.log(bgPos1);
				if(bgPos1 == '-190px -738px'){
					$(this).css('background-position','-190px -693px');
				}
			}	
		);

		$('.btn-geeks').on('click', function() {

			$(this).css('background-position','-347px -783px');
			$('.btn-divers').css('background-position','-62px -693px');
			$('.btn-instructors').css('background-position','-190px -693px');
			$('.btn-all').css('background-position','0px -693px');
		});

		$(".btn-geeks").hover(
			function () {

				var bgPos1 = $('.btn-geeks').css('background-position');
				console.log(bgPos1);
				if(!bgPos1 == '-347px -783px'){
				$(this).css('background-position','-347px -738px');
				}
				else if(bgPos1 == '-347px -693px'){
					$(this).css('background-position','-347px -738px');
				}
			},
			function () {
				
				var bgPos1 = $('.btn-geeks').css('background-position');
				console.log(bgPos1);
				if(bgPos1 == '-347px -738px'){
					$(this).css('background-position','-347px -693px');
				}
			}	
		);
		  // Показать еще (клубы)
		  $(".additionally a").on('click',function(){
		    $.ajax({
		      url: "ajax.html",
		      success: function(data){
		        club = data;
		        $(".last-club").before(club);
		      }
		    });
		  });

		 // Добавление класса fancybox-thumbs для галлереи

		$(".lastUploadPhoto a,.diveFotoGallery a").each(function(i,item){

		 	$(this).addClass('fancybox-thumbs');
		});

		// Перенос информации из селектов в див

		$("select").each(function(i, item){
			var listId     = $(this).data('id');
			var fakeSelect = $('div[data-id=' + listId + '] ul');

			$(this).find('option').each(function(i, item){
				var item = $(this).text();
				fakeSelect.append('<li><span>' + item + '</span></li>');
			});
		});

		$(".fw-dropdown li").on('click', function(){
			var el    = $(this);
			var index = el.prevAll().length;

			var selectId = el.parents('.fw-dropdown').data('id');
			var select   = $('select[data-id=' + selectId + ']');

			$(select.find('option')[index]).attr('selected', 'selected');
		});





		function calculateListWidth(dropdowns) {
			$.each(dropdowns, function(i,item){				
				var dropdown = $(this),
					list = dropdown.find('ul');

				list.css('width', self.listsWidth[i]);
				
			})
		}

		function closeEl(){		
			$('._opened').removeClass('_opened');
		};

		initialize();

		return {
			calculateListWidth: calculateListWidth
		}
	}
	//Переключение контента
	window.FW.Elements.ContentSwitch = function(){
		var tabs = $('.fw-contentSwitch > .fw-content'),
			titles = tabs.find('._contentTitle'),
			mainTitle = tabs.parent().find('.fw-contentTitle');
			
		function initialize(){
			var text = [];

			$(tabs[0]).addClass('_active');

			$.each(titles, function(){
				text.push($(this).text());
			})

			mainTitle.hide();
			for (var i=0,len=text.length;i<len;i++) {				
				mainTitle.append(
					$('<span>'+ text[i]+'</span>')
				)
			}
			mainTitle.show();
			
		}	
		
		initialize()
	}

	//Переключение табов
	window.FW.Elements.Tabs = function(){
		var tabs = $('.fw-tabs > .fw-tab'),
			mainTab = tabs.parent().find('.fw-tabs-data');

		function prepare(){
			$.each(tabs,function(){
				var tab = $(this),
					html = tab.html(),
					dropdowns = tab.find('.fw-dropdown');


				tab.on('click',function(e){
					var current = $(e.currentTarget),
						icon = current.find('.fw-icon'),																	
						iconClass = icon.attr('class'),
						newClass;                    
											
					e.stopPropagation();
					//window.FW.Elements.Instances.dropdowns.calculateListWidth(dropdowns);

					if (current.hasClass('active')) return;

					tabs.removeClass('active');
					tab.addClass('active');

					current.siblings().find('i').each(function(){	
						var className = $(this).attr('class');													
						
						if (className.indexOf('-active')) {
							var mod = className.substring(0,className.indexOf('-active'));
						
							if (mod) {
								$(this).attr('class', mod);
							}							
						}
					})

					icon.removeClass(iconClass);
					newClass = iconClass + '-active';
					icon.addClass(newClass);
					
					window.FW.Elements.Instances.dropdowns.calculateListWidth(dropdowns);
					//mainTab.html( tab.find('.fw-tab-block').html() );
				})

			})
		}

		function setFirst(){		
			var firstTab = $(tabs[0]);
			
			firstTab.addClass('active');			
			mainTab.html( firstTab.find('.fw-tab-block').html() );
		};

		function initialize(){
			prepare();
			setFirst();
		};

		initialize();
	}
	window.FW.Elements.Sorting = function(){

		var elements = $('.fw-sorting');
			

		function initialize(){
			prepare();
			setFirst();
		}

		function prepare(){
			$.each(elements,function(){
				var element = $(this);					

				element.on('click',function(e){
					var current = $(e.currentTarget),
						icon = current.find('i'),
						iconClass = icon.attr('class').split(' ')[1];
					
					if (current.hasClass('active')) return;

					current.addClass('active').siblings().removeClass('active');

					current.siblings().find('i').each(function(){
						var className = $(this).attr('class').split(' ')[1];
						
						if (className.indexOf('-active')) {
							var mod = className.substring(0,className.indexOf('-active'));								
								if (mod) {									
									$(this).removeClass(className).addClass(mod);
								}
						}
					})

					icon.removeClass(iconClass);
					iconClass += '-active';
					icon.addClass(iconClass);
				})
			})
		}
		function setFirst(){		
			var firstTab = $(elements[0]),
				icon = firstTab.find('i'),
				className = icon.attr('class');
			
			firstTab.addClass('active');
			icon.removeClass(className).addClass(className + '-active');
			
		};

		initialize();
	}
	

	// Приватные методы
	function setup(){		
		window.FW.Elements.Instances.dropdowns = new window.FW.Elements.Dropdowns();
		window.FW.Elements.Instances.tabs = new window.FW.Elements.Tabs();
		window.FW.Elements.Instances.sorting = new window.FW.Elements.Sorting();
		window.FW.Elements.Instances.ContentSwitch = new window.FW.Elements.ContentSwitch();

	};
	// Публичные методы
	return {
		init: function(){
			setup();
		}
	}
}


function scrollerHeight(){
 var count = $('._scroller ul li').length;
 var liHeight = $('._scroller ul li').height();
	lineHeight = count*liHeight/2 -5;
	$('.ps-scrollbar-y-line').css('height', lineHeight);
}