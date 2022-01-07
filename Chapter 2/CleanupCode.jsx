// Going back to conditional statements, other solutions require using external dependencies. A good practice is to avoid external dependencies as much as we can to keep our bundle smaller, but it may be worth it in this particular case because improving the readability of our templates is a big win.

// The first solution is render-if, which we can install with the following: 
// npm install --save render-if

// We can then easily use it in our projects, as follows:
// const { dataIsReady, isAdmin, userHasPermissions } = props
// const canShowSecretData = renderIf(
// dataIsReady && (isAdmin || userHasPermissions)
// );
//  return (
// <div>
//   {canShowSecretData(<SecretData />)}
// </div>


// We should at least try to keep the renderIf method as clean as possible and to do that, we can use another utility library, called react-only-if, which lets us write our components as if the condition is always true by setting the conditional function using a Higher-Order Component (HOC).


// To use the library, we need to install it as follows:
//    npm install --save react-only-if

// Once it is installed, we can use it in our apps in the following way:

// import onlyIf from 'react-only-if'

// const SecretDataOnlyIf = onlyIf(
//   ({ dataIsReady, isAdmin, userHasPermissions }) => 
//   dataIsReady && (isAdmin || userHasPermissions))
// (SecretData)

// const MyComponent = () => ( 
//   <div>
//   <SecretDataOnlyIf 
//   dataIsReady={...} 
//   isAdmin={...} 
//   userHasPermissions={...}
//   /> 
//   </div>
//   )

//   export default MyComponent


// EditorConfig helps developers to maintain consistent coding styles between different IDEs. 

//EditorConfig is supported by a lot of editors. You can check whether your editor is supported or not on the official website, https:/​/​www.​editorconfig.​org.
// You need to create a file called .editorconfig in your root directory – the configuration
// I use is this one:
// root = true
// [*]
// indent_style = space indent_size = 2
// end_of_line = lf
// charset = utf-8 trim_trailing_whitespace = true insert_final_newline = true
// [*.html] indent_size = 4
// [*.css] indent_size = 4
// [*.md]
// trim_trailing_whitespace = false
// You can affect all the files with [*], and specific files with [.extension].