package controller;

import Model.IMS;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.net.URI;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@RequestMapping("/subsystems")
@RestController
public class ImsController {

    private static List<IMS> imss = new LinkedList<>();


    @PostConstruct
    public void init(){
        imss.add(IMS.builder().id(0).subsystem_id("IMS").command("").result("").timestamp("").build());
        imss.add(IMS.builder().id(1).subsystem_id("CICS").command("").result("").timestamp("").build());
        imss.add(IMS.builder().id(2).subsystem_id("MQ").command("").result("").timestamp("").build());
        imss.add(IMS.builder().id(3).subsystem_id("DB2").command("").result("").timestamp("").build());
        imss.add(IMS.builder().id(4).subsystem_id("FTP").command("").result("").timestamp("").build());
    }


    @PostMapping
    @CrossOrigin
    public ResponseEntity<IMS> saveIMS(@RequestBody IMS ims){
        Date date=new Date();
        ims.setTimestamp(date.toString()+" /");
    imss.get(ims.getId()).setResult(ims.getTimestamp()+ims.getCommand()+"\n"+ims.getResult());
    imss.get(ims.getId()).setCommand("");
    return ResponseEntity.created(URI.create("/subsystems/"+ims.getId())).build();
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<IMS>> getAllIMS(){
        return ResponseEntity.ok(imss);
    }

//    @GetMapping
//    public ResponseEntity<IMS> getImsById(@PathVariable final int id){
//        return  ResponseEntity.of(imss.stream().filter(s -> s.getId()=id).findFirst());
//    }

}
