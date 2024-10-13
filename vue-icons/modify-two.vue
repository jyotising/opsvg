
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M21 4.5H3C2.44772 4.5 2 4.94772 2 5.5V18.5C2 19.0523 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.0523 22 18.5V5.5C22 4.94772 21.5523 4.5 21 4.5Z" stroke="#333333" strokeWidth="2"/>
	<path d="M8 4.5V19.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M10 4.5H6" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M10 19.5H6" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M11.5 15.5L18.5 8.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12.5 9.5L11.5 8.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M18.5 15.5L17.5 14.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'modify-two',
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
  