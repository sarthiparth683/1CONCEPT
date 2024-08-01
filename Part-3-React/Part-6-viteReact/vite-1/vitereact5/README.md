# To create the context (so, that data can be used globally.)

1 . create the context - created in AuthContext.jsx file 
2. Provide the context - provider - AuthContextProvider in the same AuthContext.jsx file and return with .provider - here you store gloal value and this value expect on object..
3. wrap the parent with provider - the component(App) which you want to give access data wrap it with AuthContextProvider 
4. Consume - use the value from the context. to consume the data you need useContext hooks, now useContext hook  want's which context you need to use eg.. useContext(AuthContext,,multipleContext can be used here);
