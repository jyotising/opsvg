
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M20.5 2.5H3.5C2.94772 2.5 2.5 2.94772 2.5 3.5V20.5C2.5 21.0523 2.94772 21.5 3.5 21.5H20.5C21.0523 21.5 21.5 21.0523 21.5 20.5V3.5C21.5 2.94772 21.0523 2.5 20.5 2.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 2.5V21.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2.5 12H21.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'grid-four',
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
  