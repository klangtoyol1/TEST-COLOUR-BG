cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.lighten1)
    
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
        
        btn = MUI.CreateButtonToggle("show", 0.35," show", OnToggle)
        lay.AddChild(btn)
                          
        btn = MUI.CreateButtonElegant("Azim", 0.55, 0.2, MUI.colors.red.red)
        lay.AddChild(btn)
        
        btn = MUI.CreateButtonElegant("[fa-android] QAyyUm", 0.55, 0.2, MUI.colors.pink.pink)
        lay.AddChild(btn)

        btn = MUI.CreateButtonElegant("[fa-android] Najwa aqhmad Fuzi!", 0.55, 0.2, MUI.colors.blue.blue)
        lay.AddChild(btn)
               
    app.AddLayout(lay)
    
}

function OnToggle()
{
    btt.GetVisibility()

}