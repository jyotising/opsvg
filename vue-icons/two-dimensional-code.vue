
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M10 3H3V10H10V3Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M10 14H3V21H10V14Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M21 3H14V10H21V3Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M14.5 14V21" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M20.5 14V21" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'two-dimensional-code',
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
  