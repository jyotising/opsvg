
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 21.5V2.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M20 21.5V2.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M14 7H10V17H14V7Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'distribute-horizontal-spacing',
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
  