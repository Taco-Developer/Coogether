package coogether.backend.dto.simple;

import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.History;
import coogether.backend.domain.status.EnumCookingRoomStatus;
import coogether.backend.dto.RecipeDto;
import coogether.backend.dto.UserDto;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SimpleCookingRoomDto {
    private int cookingRoomId;
    private String cookingRoomName;
    private String cookingRoomImg;

    private LocalDateTime cookingRoomStartTime;
    private EnumCookingRoomStatus cookingRoomStatus;
    private String cookingRoomNotice;

    @QueryProjection
    public SimpleCookingRoomDto(CookingRoom cookingRoom) {
        this.cookingRoomId = cookingRoom.getCookingRoomId();
        this.cookingRoomName = cookingRoom.getCookingRoomName();
        this.cookingRoomImg = cookingRoom.getCookingRoomImg();
        this.cookingRoomStartTime = cookingRoom.getCookingRoomStartTime();
        this.cookingRoomStatus = cookingRoom.getCookingRoomStatus();
        this.cookingRoomNotice = cookingRoom.getCookingRoomNotice();
    }

}
