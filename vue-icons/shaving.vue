
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M16 8.5H8C7.44772 8.5 7 8.94772 7 9.5V21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21V9.5C17 8.94772 16.5523 8.5 16 8.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M14.5 6H9.5V8.5H14.5V6Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9.5 6C9.5 5 9.5 5 9.50005 4.5C9.50005 4 9.5 2 13.5 2C17.5 2 18 2 18 2V4.5H14.5V6" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'shaving',
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
  