/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import $ from "jquery";
// export for others scripts to use

/**
 * Write any other JavaScript below
 */

+( function() {
  console.log('Hello, UOC!');  
  $('.navar__toggle').on("click", function(){
    if($(".navar__item").is(':visible')){      
      $(".navar__item").hide();
    }else{
      $(".navar__item").show();
    }
  });

  $('.navar__item').on("click", function(){
    if($(".navar__toggle").is(':visible')){
      $(".navar__item").hide();
    }
  });
} )();

