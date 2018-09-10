(function(){	
	
	$('#form').validate({
		
        rules: {           
			
			tel: {
                required: true
			}
			
		},
		
        messages: {
          	
			tel: {
				required: "Заполните это поле"
			}
		},
		
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#formTarget',
				
                success: function(data) {                                      
					
					// Close current fancybox instance
					parent.jQuery.fancybox.getInstance().close();
					
					/*setTimeout(function(){
						window.location.href = 'https://google.com';
					}, 100);*/
					
					swal({   
						title: "Спасибо! Ваша заявка принята",   						
						text: 'Мы Вам перезвоним',
						type: "success",
						timer: 5000,						
						showConfirmButton: false 
					});	
					
					
                    $("#form").clearForm();
				}
			});
		}
		
	});
	
	
})();