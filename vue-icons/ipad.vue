
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M18.5 2.5H5.5C4.94772 2.5 4.5 2.94772 4.5 3.5V20.5C4.5 21.0523 4.94772 21.5 5.5 21.5H18.5C19.0523 21.5 19.5 21.0523 19.5 20.5V3.5C19.5 2.94772 19.0523 2.5 18.5 2.5Z" stroke="#333333" strokeWidth="2"/>
	<path d="M11 18H13" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'ipad',
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
  