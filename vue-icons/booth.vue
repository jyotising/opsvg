
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M2 2.5H22V6.5L21.3008 6.91955C20.1924 7.5846 18.8076 7.5846 17.6992 6.91955L17 6.5L16.3008 6.91955C15.1924 7.5846 13.8077 7.5846 12.6993 6.91955L12 6.5L11.3007 6.91955C10.1923 7.5846 8.80765 7.5846 7.69925 6.91955L7 6.5L6.30075 6.91955C5.19235 7.5846 3.80765 7.5846 2.69927 6.91955L2 6.5V2.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M21 12.5H3V21.5H21V12.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M4.5 8V12.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M19.5 8V12.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'booth',
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
  