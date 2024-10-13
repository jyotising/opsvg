
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M20.5 8.5H3.5C2.94771 8.5 2.5 8.9477 2.5 9.5L2.50002 19.5C2.50002 20.0523 2.94773 20.5 3.50001 20.5H20.5C21.0523 20.5 21.5 20.0523 21.5 19.5V9.5C21.5 8.9477 21.0523 8.5 20.5 8.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M17 3.5H7V8.5H17V3.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9.5 14.5H14.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M12 12V17" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'medical-box',
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
  