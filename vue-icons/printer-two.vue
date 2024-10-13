
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M19 10V4C19 3.44771 18.5523 3 18 3H6C5.4477 3 5 3.44771 5 4V10" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M20 10H4C3.44772 10 3 10.4477 3 11V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V11C21 10.4477 20.5523 10 20 10Z" stroke="#333333" strokeWidth="2"/>
	<path d="M10 17H17.5V21H10V17Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M6 13H7.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'printer-two',
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
  