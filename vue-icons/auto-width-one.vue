
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M3 3.5H21" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M4 12H20" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M6.99535 15L4 12.0023L7 9" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M17.0047 9L20 11.9977L17 15" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M3 20.5H21" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'auto-width-one',
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
  