
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M10.25 22.5C11.2165 22.5 12 21.7165 12 20.75C12 19.7835 11.2165 19 10.25 19C9.2835 19 8.5 19.7835 8.5 20.75C8.5 21.7165 9.2835 22.5 10.25 22.5Z" fill="#333333"/>
	<path d="M18.75 22.5C19.7165 22.5 20.5 21.7165 20.5 20.75C20.5 19.7835 19.7165 19 18.75 19C17.7835 19 17 19.7835 17 20.75C17 21.7165 17.7835 22.5 18.75 22.5Z" fill="#333333"/>
	<path d="M2.5 3L7 6L9.5 17H19.5L22 8.5H12.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12.5 13H16.1364H20.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'shopping-cart-one',
      props: {
        width: {
          type: String,
          default: '24px'
        },
        height: {
          type: String,
          default: '24px'
        }
      }
    };
    </script>
  