/**  
 * 观察者  
 */  
class Observer {  
    /** 回调函数 */  
    private callback: Function = null;  
    /** 上下文 */  
    private context: any = null;  
  
    constructor(callback: Function, context: any) {  
        let self = this;  
        self.callback = callback;  
        self.context = context;  
    }  
  
    /**  
     * 发送通知  
     * @param args 不定参数  
     */  
    notify(...args: any[]): void {  
        let self = this;  
        if(self.callback!=null && self.context!=null)
        {
            self.callback.call(self.context, ...args);  
        }
    }  
  
    /**  
     * 上下文比较  
     * @param context 上下文  
     */  
    compar(context: any): boolean {  
        return context == this.context;  
    }  
}  