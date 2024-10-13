
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M10 16.5L13 17.5C13 17.5 20.5 16 21.5 16C22.5 16 22.5 17 21.5 18C20.5 19 17 22 14 22C11 22 9 20.5 7 20.5C5 20.5 2 20.5 2 20.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2 14.5C3 13.5 5 12 7 12C9 12 13.75 14 14.5 15C15.25 16 13 17.5 13 17.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M8 9V5C8 4.44771 8.4477 4 9 4H21C21.5523 4 22 4.44771 22 5V13" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M17.5 4H12.5V8.5H17.5V4Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'delivery',
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
  