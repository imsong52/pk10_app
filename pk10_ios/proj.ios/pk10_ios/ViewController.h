//
//  ViewController.h
//  
//  Copyright (c) 2014-2015 egret. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController

- (void)runGameWithUpdateUrl:(NSString *)updateUrl;

-(void)showUpdate:(NSDictionary*)updateDict;
@end
