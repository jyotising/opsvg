
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M14.5 16H9.5V20.5H14.5V16Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M20.5 4H3.5C2.94772 4 2.5 4.44772 2.5 5V15C2.5 15.5523 2.94772 16 3.5 16H20.5C21.0523 16 21.5 15.5523 21.5 15V5C21.5 4.44772 21.0523 4 20.5 4Z" stroke="#333333" strokeWidth="2"/>
	<path d="M11 13.5H13" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M7 20.5H17" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'computer',
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
  