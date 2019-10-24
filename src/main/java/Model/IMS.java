package Model;

import lombok.Builder;

import java.util.LinkedList;
import java.util.List;

@Builder
public class IMS {
    private int id;
    private String subsystem_id;
    private String command;
    private String result;
    private String timestamp;

    public IMS(int id, String subsystem_id, String command, String result, String timestamp) {
        this.id = id;
        this.subsystem_id = subsystem_id;
        this.command = command;
        this.result = result;
        this.timestamp = timestamp;
    }

    public IMS() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSubsystem_id() {
        return subsystem_id;
    }

    public void setSubsystem_id(String subsystem_id) {
        this.subsystem_id = subsystem_id;
    }

    public String getCommand() {
        return command;
    }

    public void setCommand(String command) {
        this.command = command;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}
