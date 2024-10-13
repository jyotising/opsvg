
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M20.5 6.5H3.5C2.94772 6.5 2.5 6.94772 2.5 7.5V19.5C2.5 20.0523 2.94772 20.5 3.5 20.5H20.5C21.0523 20.5 21.5 20.0523 21.5 19.5V7.5C21.5 6.94772 21.0523 6.5 20.5 6.5Z" stroke="#333333" strokeWidth="2"/>
	<path d="M9 17C10.6569 17 12 15.6569 12 14C12 12.3431 10.6569 11 9 11C7.34315 11 6 12.3431 6 14C6 15.6569 7.34315 17 9 17Z" stroke="#333333" strokeWidth="2"/>
	<path d="M15 12H18" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M15 16H18" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M3.5 6.5L12.5 2" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'radio',
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
  